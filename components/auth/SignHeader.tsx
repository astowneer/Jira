import Image from 'next/image'
import React from 'react'

const SignHeader = () => {
  return (
    <div className="flex justify-center gap-3 items-center h-full py-5">
      <Image
        src="/svg/atlassian.svg"
        width={2000}
        height={1000}
        alt="atlasian logo"
        className="max-h-[30px] w-auto"
      />

      <h1 className="text-4xl font-extrabold text-blue-600">ATLASIAN</h1>
    </div>
  );
};

export default SignHeader;