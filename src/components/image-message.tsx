import { Card } from "./ui/card";
import Image from "next/image";

export function ImageMessage({ url }: { url: string }) {
  return (
    <div className="w-full min-h-full flex justify-center gap-2 flex-wrap flex-col items-center">
      <Card className="w-1/3 h-full drop-shadow-lg bg-sky-100">
        <Image src={url || "/no-image-found.png"} width={500} height={500} alt="image" className="w-full h-full object-contain" />
      </Card>
      {
        !url && <p className="text-center text-2xl text-muted-foreground">No image found</p>
      }
    </div>
  )
}
