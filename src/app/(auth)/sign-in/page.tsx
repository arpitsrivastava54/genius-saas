import { Link as LinkIcon } from "lucide-react"
import Link from 'next/link'

import SignInForm from '@/components/client-components/signin-form'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import LoginWithGoogle from "@/components/client-components/login-with-google"

const SignInPage = () => {
  

  return (
    <Card className='min-w-[70%] md:min-w-[350px]'>
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Please Provide Your Details</CardDescription>
      </CardHeader>
      <CardContent>
        <SignInForm />
      </CardContent>
      <CardFooter className='flex flex-col gap-3'>
        <p className='text-center w-full'>or</p>
        <LoginWithGoogle/>
        <Link className='hover:underline hover:text-blue-700 text-xs text-blue-600' href={"/sign-up"}>Don&apos;t Have an Account ? Sign Up</Link>
      </CardFooter>
    </Card>
  )
}

export default SignInPage

