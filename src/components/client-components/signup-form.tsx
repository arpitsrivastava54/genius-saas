"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import axios, { AxiosError } from "axios";


const SignUpForm = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submitHandler = async (e: any) => {
    e.preventDefault();

    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value

    if (!name || !email || !password) {
      toast.error("All fields are required");
      return
    }

    setIsSubmitting(true)
    const toastId = toast.loading("Please Wait...")

    try {
      const resp = (await axios.post("/api/sign-up", { name, email, password })).data as ApiResponseType
        toast.success(resp.msg, {
          id: toastId
        })
        router.push("/sign-in");
    } catch (error: any) {
      toast.error(error.response.data.msg || "Something went wrong please try again !", {
        id: toastId
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <form onSubmit={submitHandler} className='flex flex-col gap-3'>
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id='name' name='name' type='name' placeholder='Please enter your name' />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id='email' name='email' type='email' placeholder='Please enter your email' />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input id='password' name='password' type='password' placeholder='Please enter your password' />
      </div>
      <Button disabled={isSubmitting} type='submit' className='w-full'>Sign Up</Button>
    </form>
  )
}

export default SignUpForm
