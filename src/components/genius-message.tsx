import { cn } from "@/lib/utils";
import Image from "next/image";

export function GeniusMessage({ msg }: { msg: string }) {
  return (
    <div className={cn('w-full flex items-center gap-2 bg-muted-foreground/10 p-3',!msg && "text-red-500")}>
      <Image src={"/logo.webp"} alt='genius-logo' width={30} height={30} />
      <span>{msg ? msg:"OOps ! Something went wrong ...."} <br />Please try after some time.</span>
    </div>
  );
}