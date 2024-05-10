"use client";

import Image from 'next/image';
import { useState } from 'react';

import Loader from '@/components/loader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { UserMessage } from '@/components/user-message';
import CodeMessage from '@/components/code-message';

import { generateCode } from '@/helpers/modelAPI';


export const CodeContent = () => {
  const [loading, setLoading] = useState(false)
  const [chats, setChats] = useState<ChatType[] | null>(null)

  async function submitHandler(e: any) {
    e.preventDefault();
    const value = e.target.msg.value
    if (!chats) {
      setChats([{ isGenius: false, msg: value }])
    } else {
      setChats(prev => [{ isGenius: false, msg: value }, ...prev!])
    }
    setLoading(true)
    const res = await generateCode(value)

    setChats(prev => [{ isGenius: true, msg: res.code }, ...prev!])
    setLoading(false)

    e.target.msg.value = "";
  }

  return (
    <>
      <form onSubmit={submitHandler} className="flex items-center gap-3 mt-5">
        <Input
          name='msg'
          type="text"
          className="h-[50px]"
          placeholder="Create a function in Javascript of adding two numbers !"
        />
        <Button type='submit' className="bg-violet-700">Generate</Button>
      </form>

      <section className="my-5 w-full h-full">
        {
          loading && <Loader />
        }
        {!chats &&
          <div className="w-full h-full flex justify-center items-center">
            <Image src={"/dummy-img.png"} width={250} height={250} className="object-contain" alt="no data" />
          </div>
        }
        {
          chats?.map((chat, i) => (
            <div className='my-2' key={i}>
              {!chat.isGenius && <UserMessage msg={chat.msg} />}
              {chat.isGenius && <CodeMessage msg={chat.msg} />}
            </div>
          ))
        }
      </section>
    </>
  )
}