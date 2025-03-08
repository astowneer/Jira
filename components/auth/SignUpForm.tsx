"use client"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from "next/link"
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox"
import { oAuthSignIn, signUp } from "@/lib/actions"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { signUpSchema } from "@/lib/schemas"
import { zodResolver } from '@hookform/resolvers/zod';

const SignUpForm = () => {
  const [error, setError] = useState<string>()
  const [showPassword, setShowPassword] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<string>("");
  const form = useForm<z.infer<typeof signUpSchema>>({
    mode: 'onTouched',
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      secretQuestion: "",
      secretAnswer: "",

    },
  })

  async function onSubmit(data: z.infer<typeof signUpSchema>) {
    const error = await signUp(data)
    setError(error)
  }
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {error && <p className="text-destructive">{error}</p>}

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

        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First name</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last name</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
              <div className="relative">
                <FormControl>
                  <Input type={showPassword ? "text" : "password" } {...field} />
                </FormControl>
                <button
                  type="button"
                  className="absolute right-0 top-0 px-3 py-2 h-full"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? 
                    <Image src="/svg/show.svg" width={16} height={16} alt="show" /> :
                    <Image src="/svg/hide.svg" width={16} height={16} alt="hide" />
                  }
                </button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm password</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input type={showPassword ? "text" : "password" } {...field} />
                </FormControl>
                <button
                  type="button"
                  className="absolute right-0 top-0 px-3 py-2 h-full"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? 
                    <Image src="/svg/show.svg" width={16} height={16} alt="show" /> : 
                    <Image src="/svg/hide.svg" width={16} height={16} alt="hide" />
                  }
                </button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="secretQuestion"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Secret Question</FormLabel>
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  setSelectedQuestion(value); 
                }}
                defaultValue={field.value ?? ""}
              >
                <FormControl className="w-full">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a secret question" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Favourite game?">Favourite game?</SelectItem>
                  <SelectItem value="Favourite book?">Favourite book?</SelectItem>
                  <SelectItem value="Favourite food?">Favourite food?</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        {selectedQuestion && (
          <FormField
            control={form.control}
            name="secretAnswer"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Secret Answer</FormLabel>
                <FormControl>
                  <Input placeholder="Your answer" {...field} value={field.value ?? ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="terms" 
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-none"
                />
                <label htmlFor="terms" className="text-sm font-medium">
                  Accept terms and conditions
                </label>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="flex flex-col gap-4 justify-end">
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700 font-semibold text-white px-2 py-2 w-full rounded-md">Sign Up</Button>
          <Button asChild variant="link" className="text-blue-500">
            <Link href="/sign-in" className="hover:underline">Already Sign up? Try to Sign in</Link>
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SignUpForm;