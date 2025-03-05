import { z } from "zod"

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
})

export const signUpSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(30),
  lastName: z.string().min(1, "Last name is required").max(30),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(7, "Password must have at least 7 characters")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[\W_]/, "Password must contain at least one special character"),
  confirmPassword: z.string().min(1, "Password confirmation is required"),
  secretQuestion: z.string().min(1, "Please select a secret question"),
  secretAnswer: z.string().min(1, "Secret answer is required"),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" }),
  }),
})
.refine((data) => data.password === data.confirmPassword, {
  path: ['confirmPassword'],
  message: 'Password do not match'
})