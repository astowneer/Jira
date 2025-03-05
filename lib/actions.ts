"use server"

import { z } from "zod"
import { redirect } from "next/navigation"
import { signInSchema, signUpSchema } from "@/lib/schemas"
import { db } from "@/app/drizzle/db"
import { OAuthProvider, UserTable } from "@/app/drizzle/schema"
import { eq } from "drizzle-orm"
import { cookies } from "next/headers"
import { comparePasswords, generateSalt, hashPassword } from "@/app/auth/core/passwordHasher"
import { createUserSession, removeUserFromSession } from "@/app/auth/core/session"
import { getOAuthClient } from "@/app/auth/core/oauth/base"

export async function signIn(unsafeData: z.infer<typeof signInSchema>) {
  const { success, data } = signInSchema.safeParse(unsafeData);

  if (!success) return "Unable to log you in";

  const user = await db.query.UserTable.findFirst({
    columns: { id: true, role: true, email: true, password: true, salt: true },
    where: eq(UserTable.email, data.email)
  })

  if (user == null || user.password == null || user.salt == null) return "Unable to log you in"

  const isCorrectPassword = await comparePasswords({
    hashedPassword: user.password,
    password: data.password,
    salt: user.salt
  })

  if (!isCorrectPassword) return "Unable to log you in"

  await createUserSession(user, await cookies())

  redirect("/projects");
}

export async function signUp(unsafeData: z.infer<typeof signUpSchema>) {
  const { success, data } = signUpSchema.safeParse(unsafeData);

  if (!success) return "Unable to create account";

  const existingUser = await db.query.UserTable.findFirst({
    where: eq(UserTable.email, data.email)
  });

  if (existingUser != null) return "Account already exists for this email";

  try {
    const salt = generateSalt();
    const hashedPassword = await hashPassword(data.password, salt);

    const [user] = await db
      .insert(UserTable)
      .values({
        // name: data.name,
        firstName: data.firstName,
        lastName: data.lastName,
        secretQuestion: data.secretQuestion,
        secretAnswer: data.secretAnswer,
        email: data.email,
        password: hashedPassword,
        salt
      })
      .returning({ id: UserTable.id, role: UserTable.role })

      if (user == null) return "Unable to create account"
      await createUserSession(user, await cookies())
  } catch (error) {
    return "Unable to create account"
  }

  redirect("/sign-in");
}

export async function logOut() {
  await removeUserFromSession(await cookies())

  redirect("/");
}

export async function oAuthSignIn(provider: OAuthProvider) {
  // redirect(new OAuthClient().createAuthUrl(await cookies()))
  const oAuthClient = getOAuthClient(provider)
  redirect(oAuthClient.createAuthUrl(await cookies()))
}
