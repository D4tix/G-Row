import Link from "next/link";
import { redirect } from "next/navigation";

import { auth } from "@/auth";
import { SignOutButton } from "@/app/components/auth/sign-out-button";
import { TwoKCalculator } from "@/app/components/rowing/two-k-calculator";
import { ArrowRightIcon } from "@/app/components/ui/arrow-right-icon";
import { AUTH_ENABLED } from "@/app/lib/auth-config";

export default async function CalculatorPage() {
  const session = AUTH_ENABLED ? await auth() : null;

  if (AUTH_ENABLED && !session?.user) {
    redirect("/");
  }

  return (
    <main className="min-h-screen bg-zinc-100 px-4 pb-6 pt-5 text-zinc-950 sm:px-6 sm:pb-10 sm:pt-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-5 sm:gap-8">
        <header className="flex flex-col gap-4 rounded-[2rem] bg-white px-5 py-6 shadow-sm ring-1 ring-zinc-200 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-8">
          <div>
            <h1 className="mt-2 text-[1.8rem] font-semibold tracking-tight sm:text-3xl">
              Percentage Calculator
            </h1>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/dashboard"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-zinc-300 px-5 text-sm font-medium text-zinc-900 transition hover:border-zinc-400 hover:bg-zinc-100 sm:h-11 sm:w-auto"
            >
              Dashboard
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            {AUTH_ENABLED ? <SignOutButton /> : null}
          </div>
        </header>

        <TwoKCalculator />
      </div>
    </main>
  );
}