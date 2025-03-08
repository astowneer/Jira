import SignUpForm from "@/components/auth/SignUpForm"
import SignHeader from "../../../components/auth/SignHeader";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"

export default function SignUp() {
  return (
    <div className="container mx-auto p-4 max-w-[450px]">
      <Card className="rounded-md block border-[1px] border-gray-100 outline-none drop-shadow-none">
        <CardHeader>
          <SignHeader />

          <CardTitle className="hidden">Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <SignUpForm />
        </CardContent>
      </Card>
    </div>
  );
}