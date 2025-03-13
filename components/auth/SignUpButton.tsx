"use client";

import { oAuthSignIn } from "@/lib/actions";
import Image from "next/image";
import React from "react";

const SignUpButton = ({ provider, className }: { provider: "github" | "discord", className?: string }) => {
  return (
    <button
      type="button"
      className={`bg-white rounded-3xl py-1 px-3 w-full border-[1px] shadow-sm hover:bg-gray-100 flex items-center justify-center gap-2 ${className}`}
      onClick={async () => await oAuthSignIn(provider)}
    >
      <Image src={`/svg/${provider}.svg`} width={18} height={18} alt={provider} />
      {provider.charAt(0).toUpperCase() + provider.slice(1)}
    </button>
  );
};

export default SignUpButton;
