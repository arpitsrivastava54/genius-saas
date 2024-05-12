"use client"
import { Check, Code, ImageIcon, MessageSquareText, Zap } from "lucide-react";
import toast from "react-hot-toast";

import postRequest from "@/helpers/postRequest";
import { getStripe } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";


const listData = [
  {
    name: "Conversation",
    icon: <span className='bg-rose-400/20 p-1 rounded-md'><MessageSquareText className="w-5 h-5 text-rose-500 " /></span>,
  },
  {
    name: "Image Generation",
    icon: <span className='bg-amber-400/20 p-1 rounded-md'> <ImageIcon className="w-5 h-5 text-amber-500" /></span>,
  },
  {
    name: "Code Generation",
    icon: <span className='bg-blue-400/20 p-1 rounded-md'> <Code className="w-5 h-5 text-blue-500" /></span>,
  },
]
export const UpgradeButton = () => {
  const router = useRouter();

  async function paymentHandler() {
    const session = await postRequest("/api/create-checkout-session", { subscription: "all" })

    if (!session.isTokenExpired) {
      router.refresh();
    }

    const stripe = await getStripe();
    const result = await stripe!.redirectToCheckout({
      sessionId: session.data,
    });
    
    if (result.error) {
      toast.error("Something went wrong with your payment")
    } 
  }
  return (
    <Dialog>
      <DialogTrigger asChild className='w-full m-0 flex justify-center items-center gap-3'>
        <Button variant={"gradient"} className="w-full m-0 flex justify-center items-center gap-3">
          Upgrade <Zap className="w-4 h-4" fill="white" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center justify-center gap-2">
            Upgrade to Genius <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">PRO</span>
          </DialogTitle>
        </DialogHeader>
        <div>
          <ul className='flex flex-col gap-5 mx-auto'>
            {
              listData.map((data, i) => (
                <li key={i} className=''>
                  <div className='hover:bg-muted-foreground/10 p-4 flex mx-auto items-center justify-between'>
                    <div className='w-full flex gap-5'>
                      {data.icon}
                      <span>{data.name}</span>
                    </div>
                    <Check className='w-5 h-5 text-green-600' />
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
        <DialogFooter>
          <Button onClick={paymentHandler} variant={"gradient"} className="w-full m-0 flex justify-center items-center gap-3">
            Upgrade <Zap className="w-4 h-4" fill="white" />  500 ₹
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

  )
}


