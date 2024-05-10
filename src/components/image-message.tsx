import Link from "next/link";
import { Card } from "./ui/card";

export function ImageMessage({ url }: { url: string }) {
  return (
    <div className="w-full min-h-full flex justify-center gap-2 flex-wrap flex-col items-center">
      <Card className="w-1/3 h-full drop-shadow-lg bg-sky-100">
        <img src={url || "/no-image-found.png"} alt="image" className="w-full h-full object-contain" />
      </Card>
      {
        !url && <p className="text-center text-2xl text-muted-foreground">No image found</p>
      }
    </div>
  )
}
