"use client"
import React from 'react'
import { Button } from '../ui/button'
import { LinkIcon } from 'lucide-react'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '@/lib/firebaseConfig'
import postRequest from '@/helpers/postRequest'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const LoginWithGoogle = () => {
  const router = useRouter();

  const googleLogin = async () => {
    const toastId = toast.loading("Please Wait...")

    try {
      const result = await signInWithPopup(auth, provider)

      const resp = await postRequest("/api/sign-in-with-google", { email: result.user.email, name: result.user.displayName })
      if (resp.success) {
        toast.success("Signin Successful", {
          id: toastId
        })
        router.replace("/dashboard");
      }
    } catch (error) {
      toast.error("Something went wrong", {
        id: toastId
      })
      return
    }
    toast.remove(toastId)
  }

  return (
    <Button onClick={googleLogin} variant={'gradient'} className='w-full flex gap-4'>
      <LinkIcon className='w-4 h-4 ' />Sign in with Google
    </Button>
  )
}

export default LoginWithGoogle
