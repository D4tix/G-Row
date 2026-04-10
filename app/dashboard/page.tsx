import Link from "next/link";
import { redirect } from "next/navigation";

import { auth } from "@/auth";
import { SignOutButton } from "@/app/components/auth/sign-out-button";
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
              <p className="mt-2 max-w-md text-sm leading-6 text-zinc-600">
                Choose one of the rowing tools below.
              </p>
            </div>
          )}
        </header>

        <section className="grid gap-4 md:grid-cols-2 md:gap-6">
          <Link
            href="/calculator"
            className="group rounded-[1.75rem] bg-white px-5 py-6 shadow-sm ring-1 ring-zinc-200 transition hover:-translate-y-0.5 hover:shadow-md sm:px-8 sm:py-8"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-zinc-500 sm:text-sm">
              Tool 01
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:mt-4 sm:text-3xl">
              2k percentage calculator
            </h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-zinc-600 sm:mt-4">
              Compare a rowing 2k time against the current reference time and see
              the resulting percentage immediately.
            </p>
            <span className="mt-6 inline-flex text-sm font-medium text-zinc-950 sm:mt-8">
              Open calculator
            </span>
          </Link>

          <Link
            href="/records"
            className="group rounded-[1.75rem] bg-zinc-950 px-5 py-6 text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:px-8 sm:py-8"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-zinc-400 sm:text-sm">
              Tool 02
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:mt-4 sm:text-3xl">
              Current rowing records
            </h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-zinc-300 sm:mt-4">
              View the current 2k reference times and the average split for each
              category on a dedicated records page.
            </p>
            <span className="mt-6 inline-flex text-sm font-medium text-white sm:mt-8">
              Open records
            </span>
          </Link>
        </section>
      </div>
    </main>
  );
}