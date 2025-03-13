"use client";

import SignUpButton from '@/components/auth/SignUpButton'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

const SignUpForm = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="py-4 lg:py-8 px-4 lg:min-w-[450px] flex flex-col space-y-4">
      <form action="" className="flex flex-col gap-2">
        <label htmlFor="email" className="font-bold text-sm">
          Work Email
        </label>
        <input 
          id="email"
          type="text" 
          placeholder="you@company@com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="py-2 pl-5 pr-2 rounded-3xl outline-none border-gray-400/30 border-[1px]"
        />
        <p className="text-gray-500 text-[10px]">Find teammates, plus keep work and life separate by using your work email.</p>
        <Link 
          href={`/sign-up?email=${encodeURIComponent(email)}`} 
          className="w-full flex justify-center bg-blue-500 hover:bg-blue-700 py-1 px-3 rounded-3xl text-xl font-semibold text-white mt-2"
        >
          Sign up
        </Link>
      </form>

      <div className="flex justify-center items-center px-2">
        <div className="border-solid border-b-[1px] -translate-y-1/2 border-gray-400/40 w-full" />
        <div className="text-sm text-center w-full">Or continue with</div>
        <div className="border-solid border-b-[1px] -translate-y-1/2 border-gray-400/40 w-full" />
      </div>

      <div className="flex justify-between items-center gap-3">
        <SignUpButton provider="github" />
        <SignUpButton provider="discord" />
      </div>
    </div>
  )
}

export default SignUpForm