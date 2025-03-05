// export default function SingUp() {
//   return (
//     <div className="bg-[url('/images/log.jpg')] h-screen w-screen bg-cover bg-no-repeat flex justify-center items-center">
//       <div className="bg-white min-w-[400px] min-h-[300px]">
        
//       </div>
//     </div>
//   );
// }

import SignUpForm from "@/components/auth/SignUpForm"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function SignUp() {
  return (
    <div className="container mx-auto p-4 max-w-[450px]">
      <Card className="rounded-md block border-[1px] border-gray-100 outline-none drop-shadow-none">
        <CardHeader>
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
          <CardTitle className="hidden">Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <SignUpForm />
        </CardContent>
      </Card>
    </div>
  )
}