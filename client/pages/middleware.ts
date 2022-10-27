import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  NextResponse.redirect(
    `https://${req.headers.get("host")}${req.nextUrl.pathname}`,
    301
  );

  console.log("middleware");

  return NextResponse.next();
}
