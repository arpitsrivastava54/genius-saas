import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import favIcon from "@/app/favicon.ico"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Genius | AI Platform",
  description: "AI Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
          <Toaster />
          {children}
      </body>
    </html>
  );
}
