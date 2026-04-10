import Link from "next/link";
import { redirect } from "next/navigation";

import { auth } from "@/auth";
import RecordBrowser from "@/app/components/rowing/record-browser";
import { SignOutButton } from "@/app/components/auth/sign-out-button";
import { AUTH_ENABLED } from "@/app/lib/auth-config";

export default async function RecordsPage() {
  const session = AUTH_ENABLED ? await auth() : null;

  if (AUTH_ENABLED && !session?.user) {
    redirect("/");
  }

  return (
    <main className="min-h-screen bg-zinc-100 px-4 pb-6 pt-5 text-zinc-950 sm:px-6 sm:pb-10 sm:pt-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-5 sm:gap-8">
        <header className="flex flex-col gap-4 rounded-[2rem] bg-white px-5 py-6 shadow-sm ring-1 ring-zinc-200 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-8">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-zinc-500 sm:text-sm">
              Records
            </p>
            <h1 className="mt-2 text-[1.8rem] font-semibold tracking-tight sm:text-3xl">
              Current 2k reference times.
            </h1>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/dashboard"
              className="inline-flex h-12 w-full items-center justify-center rounded-full border border-zinc-300 px-5 text-sm font-medium text-zinc-900 transition hover:border-zinc-400 hover:bg-zinc-100 sm:h-11 sm:w-auto"
            >
              Back to dashboard
            </Link>
            {AUTH_ENABLED ? <SignOutButton /> : null}
          </div>
        </header>

        <RecordBrowser />
      </div>
    </main>
  );
}