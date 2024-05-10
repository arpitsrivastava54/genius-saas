"use client";

import { useRouter } from "next/navigation";
import { User } from "lucide-react";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import axios from "axios";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const UserButton = () => {

  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter();
  const logoutHandler = async () => {
    setIsSubmitting(true)
    const toastId = toast.loading("Please wait...")
    try {
      const res = (await axios.get("/api/logout")).data as ApiResponseType
      toast.success(res.msg, { id: toastId })
      router.push("/")
    } catch (error: any) {
      toast.success(error.response.data.msg, { id: toastId })
    } finally {
      setIsSubmitting(false)
    }

  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span className='p-2 m-2 bg-purple-600 rounded-full text-white'><User className='w-6 h-6' /></span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="me-2">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled={isSubmitting} onClick={logoutHandler}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserButton
