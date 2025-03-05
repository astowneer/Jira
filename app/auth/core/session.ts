import { userRoles } from "@/app/drizzle/schema"
import { z } from "zod"
import crypto from "crypto"
import { redisClient } from "@/app/redis/redis"

const COOKIE_SESSION_KEY = "session-id"
// seven days in seconds
const SESSION_EXPIRATION_SECONDS = 60 * 60 * 7 * 24

const sessionSchema = z.object({
  id: z.string(),
  role: z.enum(userRoles),
})

type UserSession = z.infer<typeof sessionSchema>
export type Cookies = {
  set: (
    key: string,
    value: string,
    options: {
      secure?: boolean
      httpOnly?: boolean
      sameSite?: "strict" | "lax"
      expires?: number
    }
  ) => void
  get: (key: string) => { name: string, value: string } | undefined
  delete: (key: string) => void
}

export const getUserFromSession = (cookies: Pick<Cookies, "get">) => {
  const sessionId = cookies.get(COOKIE_SESSION_KEY)?.value
  if (sessionId == null) return null

  return getUserSessionById(sessionId)
}

export const updateUserSessionData = async (user: UserSession, cookies: Pick<Cookies, "get">) => {
  const sessionId = cookies.get(COOKIE_SESSION_KEY)?.value
  if (sessionId == null) return null

  await redisClient.set(`session:${sessionId}`, sessionSchema.parse(user), {
    ex: SESSION_EXPIRATION_SECONDS
  })
}

export const createUserSession = async (user: UserSession, cookies: Pick<Cookies, "set">) => {
  const sessionId = crypto.randomBytes(512).toString("hex").normalize()
  await redisClient.set(`session:${sessionId}`, sessionSchema.parse(user), {
    ex: SESSION_EXPIRATION_SECONDS 
  })

  setCookie(sessionId, cookies)
}

export const updateUserSessionExpiration = async (cookies: Pick<Cookies, "get" | "set">) => {
  const sessionId = cookies.get(COOKIE_SESSION_KEY)?.value
  if (sessionId == null) return null

  const user = await getUserSessionById(sessionId)
  if (user == null) return null

  await redisClient.set(`session:${sessionId}`, user, {
    ex: SESSION_EXPIRATION_SECONDS
  })
  setCookie(sessionId, cookies)
}

export const removeUserFromSession = async (cookies: Pick<Cookies, "get" | "delete">) => {
  const sessionId = cookies.get(COOKIE_SESSION_KEY)?.value
  if (sessionId == null) return null

  await redisClient.del(`session:${sessionId}`)
  cookies.delete(COOKIE_SESSION_KEY)
}

const setCookie = (sessionId: string, cookies: Pick<Cookies, "set">) => {
  cookies.set(COOKIE_SESSION_KEY, sessionId, {
    secure: true,
    httpOnly: true,
    sameSite: "lax",
    expires: Date.now() + SESSION_EXPIRATION_SECONDS * 1000
  })
}

const getUserSessionById = async (sessionId: string) => {
  const rawUser = await redisClient.get(`session:${sessionId}`)

  const { success, data: user } = sessionSchema.safeParse(rawUser)

  return success ? user : null
}