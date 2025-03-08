import SignInForm from "@/components/auth/SignInForm"
import SignHeader from "../../../components/auth/SignHeader"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default async function SignIn({
  searchParams,
}: {
  searchParams: Promise<{ oauthError?: string }>
}) {
  const { oauthError } = await searchParams

  return (
    <div className="container mx-auto px-4 py-10 max-w-[450px] overflow-y-scroll flex flex-col justify-center h-screen">
      <Card className="rounded-md block border-gray-100 border-[1px] drop-shadow-none outline-none">
        <CardHeader>
          <SignHeader />

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
  );
}