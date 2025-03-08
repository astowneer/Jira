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
import Image from "next/image"
import { oAuthSignIn, signIn } from "@/lib/actions"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { signInSchema } from "@/lib/schemas"

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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
          
          <p className="text-center font-semibold text-gray-500 text-sm py-2">Or continue with</p>
          <div className="flex flex-col gap-4">
            <Button
              type="button"
              className="border-[1px] border-gray-300 px-2 py-4 bg-white hover:bg-gray-100 text-black w-full rounded-md"
              onClick={async () => await oAuthSignIn("github")}
            >
              <Image src="/svg/github-mark.svg" width={18} height={18} alt="github" />
              Github
            </Button>
            <Button
              type="button"
              className="border-[1px] border-gray-300 px-2 py-4 bg-white hover:bg-gray-100 text-black w-full rounded-md"
              onClick={async () => await oAuthSignIn("discord")}
            >
              <Image src="/svg/discord.svg" width={18} height={18} alt="github" />
              Discord
            </Button>
          </div>
          <Link href="/sign-up" className="hover:underline text-blue-500">Can't login? Try to sign up</Link>
        </div>
      </form>
    </Form>
  );
};

export default SignInForm;