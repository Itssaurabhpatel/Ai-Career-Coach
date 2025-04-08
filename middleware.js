import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define protected routes
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/resume(.*)",
  "/interview(.*)",
  "/ai-cover-letter(.*)",
  "/onboarding(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  try {
    const { userId, redirectToSignIn } = await auth();

    if (!userId && isProtectedRoute(req)) {
      return redirectToSignIn();
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Middleware Error:", error);
    return new Response("Middleware failed", { status: 500 });
  }
});

// Configure routes where the middleware should run
export const config = {
  matcher: [
    // Skip Next.js internals and static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
