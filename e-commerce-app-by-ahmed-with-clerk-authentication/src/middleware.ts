import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/"],
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)",
    "/allProducts",
    "/category",
    "/search",
    "/(api|trpc)(.*)",
  ],

  //matcher: ["/allProducts", "/category"],
};
