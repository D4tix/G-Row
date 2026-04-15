import Link from "next/link";
import { redirect } from "next/navigation";

import { auth } from "@/auth";
import { SignOutButton } from "@/app/components/auth/sign-out-button";
import { ArrowRightIcon } from "@/app/components/ui/arrow-right-icon";
import { AUTH_ENABLED } from "@/app/lib/auth-config";

function getInitials(name?: string | null, email?: string | null) {
  const source = name?.trim() || email?.trim() || "User";

  return source.slice(0, 2).toUpperCase();
}

export default async function DashboardPage() {
  const session = AUTH_ENABLED ? await auth() : null;

  if (AUTH_ENABLED && !session?.user) {
    redirect("/");
  }

  const initials = getInitials(session?.user?.name, session?.user?.email);

  return (
    <main className="min-h-screen bg-zinc-100 px-4 pb-6 pt-5 text-zinc-950 sm:px-6 sm:pb-10 sm:pt-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-5 sm:gap-8">
        <header className="flex flex-col gap-4 rounded-[2rem] bg-white px-5 py-6 shadow-sm ring-1 ring-zinc-200 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-8">
          {AUTH_ENABLED && session?.user ? (
            <>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-950 text-sm font-semibold text-white sm:h-14 sm:w-14">
                  {initials}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-zinc-500 sm:text-sm">
                    Navigation
                  </p>
                  <h1 className="text-xl font-semibold sm:text-2xl">
                    {session.user.name ?? "Google account"}
                  </h1>
                  <p className="text-sm text-zinc-600 break-all">{session.user.email}</p>
                </div>
              </div>
              <SignOutButton />
            </>
          ) : (
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-500 sm:text-sm">
                Navigation
              </p>
              <h1 className="mt-2 text-[1.65rem] font-semibold tracking-tight sm:text-2xl">G-Row dashboard</h1>
            </div>
          )}
        </header>

        <section className="grid gap-4 md:grid-cols-2 md:gap-6 pl-2 pr-2">
          <Link
            href="/calculator"
            className="group flex items-center justify-between gap-4 rounded-[1.75rem] bg-white px-5 py-6 shadow-sm ring-1 ring-zinc-200 transition hover:-translate-y-0.5 hover:shadow-md sm:px-8 sm:py-8"
          >
            <h2 className="m-3 text-xl font-semibold tracking-tight sm:mt-4 sm:text-3xl">
              Percentage Calculator
            </h2>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-white transition group-hover:translate-x-1">
              <ArrowRightIcon className="h-5 w-5" />
            </span>
          </Link>

          <Link
            href="/records"
            className="group flex items-center justify-between gap-4 rounded-[1.75rem] bg-zinc-950 px-5 py-6 text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:px-8 sm:py-8"
          >
            <h2 className="m-3 text-xl font-semibold tracking-tight sm:mt-4 sm:text-3xl">
              Worldrecords
            </h2>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/12 text-white transition group-hover:translate-x-1">
              <ArrowRightIcon className="h-5 w-5" />
            </span>
          </Link>
          
          <Link
            href="#"
            className="group flex items-center justify-between gap-4 rounded-[1.75rem] bg-white px-5 py-6 shadow-sm ring-1 ring-zinc-200 transition hover:-translate-y-0.5 hover:shadow-md sm:px-8 sm:py-8"
          >
            <h2 className="m-3 text-xl font-semibold tracking-tight sm:mt-4 sm:text-3xl">
              ...
            </h2>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-white transition group-hover:translate-x-1">
              <ArrowRightIcon className="h-5 w-5" />
            </span>
          </Link>
        </section>
      </div>
    </main>
  );
}