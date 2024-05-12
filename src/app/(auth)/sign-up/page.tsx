import { Link as LinkIcon } from "lucide-react"
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import SignUpForm from "@/components/client-components/signup-form"
import LoginWithGoogle from "@/components/client-components/login-with-google"


const SignUpPage = () => {

  return (
    <Card className='min-w-[70%] md:min-w-[350px]'>
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Please Provide Your Details</CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpForm />
      </CardContent>
      <CardFooter className='flex flex-col gap-3'>
        <p className='text-center w-full'>or</p>
        <LoginWithGoogle />
        <Link className='hover:underline hover:text-blue-700 text-xs text-blue-600' href={"/sign-in"}>Already Have an Account ? Sign In</Link>
      </CardFooter>
    </Card>
  )
}

export default SignUpPage
