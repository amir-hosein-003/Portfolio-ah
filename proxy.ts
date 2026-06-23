import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextResponse } from "next/server";

export default function proxy(req: any) {
  const { pathname } = req.nextUrl;

  if (pathname === "/") {
    const defaultLocale = routing.defaultLocale || "en";
    const url = new URL(`/${defaultLocale}`, req.url);
    return NextResponse.redirect(url);
  }

  return createMiddleware(routing)(req);
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
