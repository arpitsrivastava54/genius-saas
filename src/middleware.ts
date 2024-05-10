import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { dbConnect } from "./lib/dbConnection";

export async function middleware(request: NextRequest) {
 const path = request.nextUrl.pathname;
 const token = request.cookies.get("authToken")?.value || "";
 const isPublicPath =
  path === "/" || path === "/sign-in" || path === "/sign-up";

 if (!token && !isPublicPath) {
  return NextResponse.redirect(new URL("/sign-in", request.url));
 }
 
 if (token && isPublicPath) {
  return NextResponse.redirect(new URL("/dashboard", request.url));
 }

 return NextResponse.next();
}

export const config = {
 matcher: ["/", "/sign-in", "/sign-up", "/dashboard"],
};
