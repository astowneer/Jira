import { env } from "@/app/data/env/server"
import { OAuthClient } from "./base"
import { z } from "zod"

export function createGithubOAuthClient() {
  return new OAuthClient({
    provider: "github",
    clientId: env.GITHUB_CLIENT_ID,
    clientSecret: env.GITHUB_CLIENT_SECRET,
    scopes: ["user:email", "read:user"],
    urls: {
      auth: "https://github.com/login/oauth/authorize",
      token: "https://github.com/login/oauth/access_token",
      user: "https://api.github.com/user",
    },
    userInfo: {
      schema: z.object({
        id: z.number(),
        name: z.string().nullable(),
        login: z.string(),
        email: z.string().email().nullable(), 
      }),
      parser: user => ({
        id: user.id.toString(),
        // name: user.name ?? user.login,
        firstName: user.name ?? user.login,
        lastName: "",
        email: user.email ?? "",
      }),
    }    
  })
}