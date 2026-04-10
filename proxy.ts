import { NextResponse } from "next/server";
import { auth as authProxy } from "@/auth";
import { AUTH_ENABLED } from "@/app/lib/auth-config";

// The route protection toggle is centralized in `app/lib/auth-config.ts`.
// When `AUTH_ENABLED` is set to `true`, this proxy automatically switches back
// to the existing Auth.js handler.
export const proxy = AUTH_ENABLED ? authProxy : () => NextResponse.next();

export const config = {
  matcher: ["/dashboard/:path*", "/calculator/:path*", "/records/:path*"],
};