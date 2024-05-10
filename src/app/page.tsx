import { Button } from "@/components/ui/button";
import Typewriter from "@/components/ui/typewriter";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#0a0b38] w-full text-white" >
      <header className="flex justify-between p-5">
        <div className="logo flex items-center gap-2">
          <span className="">
            <Image alt="logo" src={"/logo.webp"} width={30} height={30} />
          </span>
          <span className="text-base md:text-xl font-semibold">Genius</span>
        </div>
        <div className="btn">
          <Link href={"/sign-in"} className="bg-white text-black px-3 py-2 rounded-full hover:bg-muted-foreground hover:text-white font-semibold transition-all duration-500 text-sm">Get Started</Link>
        </div>
      </header>

      <section className="flex flex-col h-[50vh] justify-center gap-10 items-center my-10 w-full">
        <h1 className="text-4xl md:text-6xl font-semibold">The Best AI Tool for</h1>
        <h2 className="my-5 h-[2rem] text-fuchsia-600 text-3xl md:text-5xl font-bold">
          <Typewriter data={["ChatBot", "Image Generation", "Code Generation", "Video Generation"]} />
        </h2>
        <div className="flex-col items-center flex gap-5">
          <p className="hover:text-muted-foreground">Create content using AI 10x faster.</p>
          <Link href={"/sign-in"}><Button className="m-0" variant={"gradient"}>Start Generating For free</Button></Link>
          <p className="hover:text-muted-foreground">No credit card required</p>
        </div>
      </section>

      <section className="">
        <h1 className="text-center text-2xl md:text-4xl font-semibold my-10">Testimonials</h1>
        <div className="flex gap-2 flex-wrap justify-center my-10">
          {
            Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="w-[80%] md:w-[24%] p-2 flex gap-3 rounded-lg bg-[#0e1f4e] hover:bg-[#0e1f4e52] cursor-pointer">
                <div className="w-[20%] my-3">
                  <Image src={"/user-1.jpg"} alt="" width={100} height={100} className="rounded-full" />
                </div>
                <div>
                  <h2 className="font-semibold my-1">Name</h2>
                  <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim nihil maxime</p>
                </div>
              </div>
            ))
          }
        </div>
      </section>
      <footer className="mt-5 text-center py-5 bg-[#0e1f4e] text-sm md:text-base">
        All rights reserved and developed by Arpit Srivastava | &copy; Copyright 2024
      </footer>
    </main>
  );
}
