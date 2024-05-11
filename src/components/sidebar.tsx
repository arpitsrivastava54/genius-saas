"use client";

import { Code, Image as ImageIcon, LayoutDashboard, MessageSquareText, Settings, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useFreeTrialContext } from "@/context/FreeTrialContext";
import { Button } from "./ui/button";

const navItems = [
  {
    name: "Dashboard",
    icon: <LayoutDashboard className="w-5 h-5 text-blue-500" />,
    href: "/dashboard"
  },
  {
    name: "Conversation",
    icon: <MessageSquareText className="w-5 h-5 text-rose-500" />,
    href: "/conversation"
  },
  {
    name: "Image Generation",
    icon: <ImageIcon className="w-5 h-5 text-amber-500" />,
    href: "/image"
  },
  {
    name: "Code Generation",
    icon: <Code className="w-5 h-5 text-blue-300" />,
    href: "/code"
  },
  {
    name: "Settings",
    icon: <Settings className="w-5 h-5 text-white" />,
    href: "/settings"
  },
]

export const SideBar = () => {
  const pathname = usePathname();
  const { freeTrialCount } = useFreeTrialContext()

  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <div className="logo px-4 my-6 flex items-center gap-2">
          <span className="">
            <Image alt="logo" src={"/logo.webp"} width={40} height={40} />
          </span>
          <span className="text-lg md:text-2xl font-semibold">Genius</span>
        </div>

        <nav className="w-full flex flex-col items-center gap-3">
          {
            navItems.map((item, i) => (
              <Link key={i} className={cn("flex w-[90%] rounded-sm text-muted-foreground hover:text-muted hover:bg-muted-foreground/30 items-center p-3 text-sm md:text-base gap-2", pathname.includes(item.href) && "bg-muted-foreground/30 text-white")} href={item.href}>{item.icon}{item.name}</Link>
            ))
          }
        </nav>
      </div>


      <Card className="mb-10 p-3 flex flex-col gap-4 items-center w-[90%] mx-auto bg-slate-700 border-none">
        <p className="text-white font-semibold text-xs">{freeTrialCount}/5 Free Generation</p>
        <Progress value={freeTrialCount * 20} className="h-[9px]" />
        <Button variant={"gradient"} className="w-full m-0 flex justify-center items-center gap-3">Upgrade <Zap className="w-4 h-4" fill="white" /></Button>
      </Card>
    </div>
  )
}


