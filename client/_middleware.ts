import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export function _middleware(req: NextRequest, ev: NextFetchEvent) {
  if (req.headers.get("x-forwarded-proto") !== "https") {
    console.log(req.headers);
    return NextResponse.redirect(
      `https://${req.headers.get("host")}${req.nextUrl.pathname}`,
      301
    );
  }
  return NextResponse.next();
}
