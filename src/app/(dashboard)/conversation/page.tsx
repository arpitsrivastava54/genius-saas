import { MessageSquareText } from "lucide-react";
import { ConversationContent } from "./conversation-content";
// const headData = [

//   {
//     name: "Image Generation",
//     icon: <span className='bg-amber-400/20 p-1 rounded-md'> <ImageIcon className="w-5 h-5 text-amber-500" /></span>,
//     href: "/image"
//   },
//   {
//     name: "Video Generation",
//     icon: <span className='bg-green-400/20 p-1 rounded-md'> <Video className="w-5 h-5 text-green-500" /></span>,
//     href: "/video"
//   },
//   {
//     name: "Music Generation",
//     icon: <span className='bg-orange-400/20 p-1 rounded-md'> <Music className="w-5 h-5 text-orange-500" /></span>,
//     href: "/music"
//   },
//   {
//     name: "Code Generation",
//     icon: <span className='bg-blue-400/20 p-1 rounded-md'> <Code className="w-5 h-5 text-blue-500" /></span>,
//     href: "/code"
//   },
// ]
const ConversationPage = () => {
  return (
    <div className="p-5 h-[75%]">
      <div className="flex gap-5 items-center">
        <span className='bg-rose-400/20 p-1 rounded-md'><MessageSquareText className="w-7 h-7 text-rose-500 " /></span>
        <div>
          <h1 className="text-xl md:text-3xl font-semibold">Conversation</h1>
          <p className="text-xs mt-1 font-medium md:text-sm text-muted-foreground">Our most advance conversation model</p>
        </div>
      </div>

     <ConversationContent/>
    </div>
  )
}

export default ConversationPage
