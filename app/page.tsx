import Link from "next/link";
import { redirect } from "next/navigation";

import { auth } from "@/auth";
import { SignInButton } from "@/app/components/auth/sign-in-button";
import { ArrowRightIcon } from "@/app/components/ui/arrow-right-icon";
import { AUTH_ENABLED } from "@/app/lib/auth-config";

export default async function Home() {
  const session = AUTH_ENABLED ? await auth() : null;

  if (AUTH_ENABLED && session?.user) {
    redirect("/dashboard");
  }

  return (
    <main className="min-h-screen bg-zinc-100 px-4 pb-6 pt-8 text-zinc-950 sm:px-6 sm:pt-10">
      <div className="mx-auto flex min-h-[calc(100vh-3.5rem)] w-full max-w-sm flex-col justify-center">
        <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-zinc-200">
          <div className="bg-[linear-gradient(145deg,#ffffff_0%,#fafafa_42%,#f4f4f5_100%)] px-5 pb-8 pt-6 sm:px-8 sm:pb-10 sm:pt-8">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
              G-Row
            </p>
            <h1 className="mt-4 text-[2rem] font-semibold tracking-tight sm:text-[2.4rem]">
              {AUTH_ENABLED ? "Sign in" : "Open app"}
            </h1>
            <p className="mt-3 max-w-xs text-sm leading-6 text-zinc-600 sm:text-base">
              {AUTH_ENABLED
                ? "Sign in with Google to access the rowing tools."
                : "Open the rowing tools directly. The experience is currently available without OAuth."}
            </p>
          </div>

          <div className="px-5 pb-5 pt-4 sm:px-8 sm:pb-8 sm:pt-5">
            <div className="rounded-[1.5rem] bg-zinc-50 p-4 ring-1 ring-zinc-100 sm:p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                Mobile first
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Quick access to the dashboard, calculator, and records pages.
              </p>
            </div>

            <div className="mt-5">
          {AUTH_ENABLED ? (
            <SignInButton />
          ) : (
            <Link
              href="/dashboard"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-zinc-950 px-5 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              Continue
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
