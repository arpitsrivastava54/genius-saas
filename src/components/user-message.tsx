import { User } from "lucide-react";

export function UserMessage({ msg }: { msg: string }) {
  return (
    <div className='w-full flex items-center'>
      <span className='p-2 m-2 bg-purple-600 rounded-full text-white'><User className='w-4 h-4' /></span>
      <span>{msg}</span>
    </div>
  )
}