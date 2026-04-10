import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

// Auth.js is kept configured in the project for a clean re-enable later.
// Toggle runtime usage from `app/lib/auth-config.ts`.
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
  pages: {
    signIn: "/",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isPrivateRoute = ["/dashboard", "/calculator", "/records"].some(
        (path) => nextUrl.pathname.startsWith(path),
      );

      if (isPrivateRoute) {
        return !!auth;
      }

      return true;
    },
  },
});