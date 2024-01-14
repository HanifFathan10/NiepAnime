import { NextResponse, userAgent } from "next/server";
export { default } from "next-auth/middleware";
export const config = { matcher: ["/users/:path*"] };

export function middleware(request) {
  const url = request.nextUrl;
  const { device } = userAgent(request);
  const viewport = device.type === "mobile" ? "mobile" : "desktop";
  url.searchParams.set("viewport", viewport);
  return NextResponse.rewrite(url);
}
