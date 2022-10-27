import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export function _middleware(req: NextRequest, ev: NextFetchEvent) {
  console.log(req.headers);

  if (req.headers.get("x-forwarded-proto") !== "https") {
    return NextResponse.redirect(
      `https://${req.headers.get("host")}${req.nextUrl.pathname}`,
      301
    );
  }
  return NextResponse.next();
}