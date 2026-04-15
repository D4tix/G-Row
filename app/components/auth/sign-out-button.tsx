import { signOut } from "@/auth";

import { ArrowRightIcon } from "@/app/components/ui/arrow-right-icon";

type SignOutButtonProps = {
  className?: string;
};

export function SignOutButton({ className }: SignOutButtonProps) {
  return (
    <form
      action={async () => {
        "use server";

        await signOut({ redirectTo: "/" });
      }}
    >
      <button
        type="submit"
        className={className ?? "inline-flex h-11 items-center justify-center gap-2 rounded-full border border-zinc-300 px-5 text-sm font-medium text-zinc-900 transition hover:border-zinc-400 hover:bg-zinc-100"}
      >
        Sign out
        <ArrowRightIcon className="h-4 w-4" />
      </button>
    </form>
  );
}