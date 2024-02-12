import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(req) {
    const pathname = req.nextUrl.pathname;

    const sensitiveRoutes = ["/chatmeh", "/pdf-talks",  "fun-zone"];

    const isAuth = await getToken({ req });

    const isLoginPage = pathname.startsWith("/login");
    const isRegisterPage = pathname.startsWith("/register");

    const isAccessingSensitiveRoute = sensitiveRoutes.some((route) =>
      pathname.startsWith(route)
    );

    if (isLoginPage) {
      if (!isAuth) {
        return NextResponse.redirect(new URL("/", req.url));
      }

      return NextResponse.next();
    }

    if (isRegisterPage) {
      if (isAuth) {
        return NextResponse.redirect(new URL("/", req.url));
      }

      return NextResponse.next();
    }

    if (!isAuth) {
      if (isAccessingSensitiveRoute) {
        return NextResponse.redirect(new URL("/login", req.url));
      }
      return NextResponse.next();
    }
  },
  {
    callbacks: {
      async authorized() {
        return true;
      },
    },
  }
);
 
export const config = {
  matchter: [
    "/",
    "/register",
    "/login",
    "/chatmeh",
    "/pdf-talks",
    // "/api/:path*",
  ],
};
