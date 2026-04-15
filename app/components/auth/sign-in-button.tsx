import { signIn } from "@/auth";

import { ArrowRightIcon } from "@/app/components/ui/arrow-right-icon";

export function SignInButton() {
  return (
    <form
      action={async () => {
        "use server";

        await signIn("google", { redirectTo: "/dashboard" });
      }}
    >
      <button
        type="submit"
        className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-zinc-950 px-5 text-sm font-medium text-white transition hover:bg-zinc-800"
      >
        Continue with Google
        <ArrowRightIcon className="h-4 w-4" />
      </button>
    </form>
  );
}