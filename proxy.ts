import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Let Better Auth API routes pass through (handled by route handler)
  if (pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  // Check for Better Auth session cookie (try different possible names)
  const sessionToken =
    request.cookies.get("better-auth.session_token")?.value ||
    request.cookies.get("better_auth_session")?.value ||
    request.cookies.get("session_token")?.value ||
    request.cookies.get("auth_session")?.value;

  // Protect dashboard routes - check for session cookie
  // Full session validation happens in dashboard layout (Node.js runtime)
  if (pathname.startsWith("/dashboard")) {
    if (!sessionToken) {
      console.log("No session token found, redirecting to sign-in");
      console.log(
        "Available cookies:",
        request.cookies.getAll().map((c) => c.name)
      );
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }
  }

  // Redirect authenticated users away from auth pages to home
  // Role-based redirect (admin to dashboard) is handled in the auth pages after sign-in
  if (pathname.startsWith("/sign-in") || pathname.startsWith("/sign-up")) {
    if (sessionToken) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
