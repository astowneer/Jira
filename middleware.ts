import { type NextRequest, NextResponse } from "next/server";
import { getUserFromSession } from "./app/auth/core/session";

const privateRoutes = ['/projects']

export default async function middleware(request: NextRequest) {
  const response = await middlewareAuth(request) ?? NextResponse.next()

  return response;
}

async function middlewareAuth(request: NextRequest) {
  if (privateRoutes.includes(request.nextUrl.pathname)) {
    const user = await getUserFromSession(request.cookies)
    if (user == null) {
      return NextResponse.redirect(new URL('/sign-in', request.url))
    }
  }
}


export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.|html?|css|js|json|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest).*)"
  ]
};