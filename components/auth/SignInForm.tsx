"use client"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import Link from "next/link"
import { signIn } from "@/lib/actions"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { signInSchema } from "@/lib/schemas"
import SignUpButton from "./SignUpButton"

const SignInForm = () => {
  const [error, setError] = useState<string>()
  const form = useForm<z.infer<typeof signInSchema>>({
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(data: z.infer<typeof signInSchema>) {
    const error = await signIn(data)
    setError(error)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {error && <p className="text-destructive">{error}</p>}
       
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col gap-4 justify-end">
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700 font-semibold text-white px-2 py-2 w-full rounded-md">Sign In</Button>
          
          <p className="text-center font-medium text-gray-500 text-sm py-2">Or continue with</p>
          <div className="flex flex-col gap-4">
            <SignUpButton provider="github" className="border-[1px] border-gray-300 py-2 bg-white hover:bg-gray-100 text-black w-full rounded-md" />
            <SignUpButton provider="discord" className="border-[1px] border-gray-300 py-2 bg-white hover:bg-gray-100 text-black w-full rounded-md" />
          </div>
          <Link href="/sign-up" className="hover:underline text-blue-500 text-sm">Can't login? Try to sign up</Link>
        </div>
      </form>
    </Form>
  );
};

export default SignInForm;