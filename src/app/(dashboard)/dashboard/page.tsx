import { Card } from '@/components/ui/card';
import { ArrowRight, Code, Image as ImageIcon, MessageSquareText, Music, Video } from "lucide-react";
import Link from 'next/link';

const listData = [
  {
    name: "Conversation",
    icon: <span className='bg-rose-400/20 p-1 rounded-md'><MessageSquareText className="w-5 h-5 text-rose-500 " /></span>,
    href: "/conversation"
  },
  {
    name: "Image Generation",
    icon: <span className='bg-amber-400/20 p-1 rounded-md'> <ImageIcon className="w-5 h-5 text-amber-500" /></span>,
    href: "/image"
  },
  {
    name: "Code Generation",
    icon: <span className='bg-blue-400/20 p-1 rounded-md'> <Code className="w-5 h-5 text-blue-500" /></span>,
    href: "/code"
  },
]
const DashboardPage = () => {
  return (
    <div className='w-full h-[80%] flex flex-col justify-center gap-20'>
      <div>
        <h1 className='text-center text-2xl md:text-4xl font-extrabold'>Explore the power of AI</h1>
        <p className='text-center text-sm md:text-base my-3 text-muted-foreground'>Chat with the smartest AI - Experience the power of AI</p>
      </div>
      <ul className='flex flex-col gap-5 w-[90%] md:w-[80%] mx-auto shadow-lg'>
        <Card>
          {
            listData.map((data, i) => (
              <li key={i} className=''>
                <Link href={data.href} className='hover:bg-muted-foreground/10 p-4 flex mx-auto items-center justify-between'>
                  <div className='w-full flex gap-5'>
                    {data.icon}
                    <span>{data.name}</span>
                  </div>
                  <ArrowRight className='w-5 h-5 text-blue-600' />
                </Link>
              </li>
            ))
          }
        </Card>
      </ul>
    </div>
  )
}

export default DashboardPage
