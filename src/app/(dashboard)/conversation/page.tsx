import { MessageSquareText } from "lucide-react";
import { ConversationContent } from "./conversation-content";

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
