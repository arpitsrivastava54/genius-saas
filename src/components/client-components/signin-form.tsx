"use client";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const SignInForm = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submitHandler = async (e: any) => {
    e.preventDefault();

    const email = e.target.email.value
    const password = e.target.password.value

    if (!email || !password) {
      toast.error("Email and Password Requried");
      return
    }

    setIsSubmitting(true)
    const toastId = toast.loading("Please Wait...")

    try {
      const resp = (await axios.post("/api/sign-in", { email, password })).data as ApiResponseType
      toast.success(resp.msg, {
        id: toastId
      })
      router.replace("/dashboard");
    } catch (error: any) {
      toast.error(error.response.data.msg || "Something went wrong please try again !", {
        id: toastId
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <form className='flex flex-col gap-3' onSubmit={submitHandler}>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id='email' name='email' type='email' placeholder='Please enter your email' />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input id='password' name='password' type='password' placeholder='Please enter your password' />
      </div>
      <Button disabled={isSubmitting} type='submit' className='w-full'>Sign In</Button>
    </form>
  )
}

export default SignInForm
