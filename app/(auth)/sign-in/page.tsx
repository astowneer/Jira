// import Image from "next/image";

// export default function SignIn() {
//   return (
//     // <article className="w-full h-screen flex justify-center items-center">
      
//     // </article>

//     <section className="max-w-[320px] w-full h-[500px] bg-white bg-red border-2 border-gray-100 shadow-lg px-5 py-5">
//       <div className="flex justify-center items-center max-h-[40px] h-full gap-1 ">
//         <Image
//           src="/images/atlasian-logo.jpeg"
//           width={2000}
//           height={1000}
//           alt="atlasian logo"
//           className="h-full w-auto"
//         />

//         <h1 className="text-4xl font-extrabold text-blue-600">ATLASIAN</h1>
//       </div>

//       <p>Log in to continue</p>

//       <form action="" className="mb-5">
//         <input type="email" />
//         <div className="flex items-center gap-2">
//           <label htmlFor="remember-me">
//             <input type="checkbox" name="Remember me" id="remember-me" />
//             {" "}Remember me
//           </label>
//             <div className="relative bg-black size-3 rounded-full group">
//               <div className="hidden group-hover:block absolute left-5 top-0 bg-gray-400 text-white p-1 w-[240px] text-[10px]">
//                 We remember your account information for the next time you log in.
//               </div>
//             </div>
//         </div>

//         <button className="bg-blue-600 text-white px-2 py-2 w-full rounded-md">Continue</button>
//       </form>

//       <div className="flex flex-col gap-5">
//         <p>Or continue with</p>

//         <button className="border-2 border-gray-400 px-2 py-2 w-full rounded-md">Google</button>
//         <button className="border-2 border-gray-400 px-2 py-2 w-full rounded-md">Google</button>
//         <button className="border-2 border-gray-400 px-2 py-2 w-full rounded-md">Google</button>
//         <button className="border-2 border-gray-400 px-2 py-2 w-full rounded-md">Google</button>
//       </div>

//       <div className="flex text-blue-500">
//         <button>Can't log in?</button>
//         <button>Create an account</button>
//       </div>
//     </section>
//   );
// }

import SignInForm from "@/components/auth/SignInForm"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

export default async function SignIn({
  searchParams,
}: {
  searchParams: Promise<{ oauthError?: string }>
}) {
  const { oauthError } = await searchParams

  return (
    <div className="container mx-auto px-4 py-10 max-w-[450px] overflow-y-scroll flex flex-col justify-center h-screen">
      <Card className="rounded-md block border-gray-100 border-[1px]  drop-shadow-none outline-none">
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
          <CardTitle className="hidden">Sign In</CardTitle>
          {oauthError && (
            <CardDescription className="text-destructive">
              {oauthError}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent>
          <SignInForm />
        </CardContent>
      </Card>
    </div>
  )
}