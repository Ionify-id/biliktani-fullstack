import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Check if the user is authenticated
  const isAuthenticated = checkAuthentication(request);

  // Public routes (accessible even when not logged in)
  const publicRoutes = ["/", "/bina-tani", "/rawat-tani", "/siap-tani"];

  // Protected routes (only accessible when logged in)
  const protectedRoutes = ["/catatan", "/jadwal-tani", "/profile"];

  // Auth routes (only accessible when not logged in)
  const authRoutes = ["/login", "/register"];

  // Allow access to public routes
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // Redirect authenticated users away from auth routes
  if (isAuthenticated && authRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Redirect unauthenticated users away from protected routes
  if (!isAuthenticated && protectedRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Allow access to auth routes for unauthenticated users
  if (!isAuthenticated && authRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // For all other cases, allow the request to proceed
  return NextResponse.next();
}

// Helper function to check authentication
function checkAuthentication() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("token");

  // Check if the authToken exists and is valid
  // This is a simple check. You might want to add more validation
  return !!authToken;
}

// Configure which routes should be processed by this middleware
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
