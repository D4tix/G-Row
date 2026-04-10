This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Google OAuth setup

This project includes a basic Auth.js integration for Google OAuth.

OAuth is currently disabled in the runtime pages and proxy, but the project keeps
the Auth.js setup files so it can be turned back on without re-scaffolding.

The single switch for this is `app/lib/auth-config.ts`:

- `AUTH_ENABLED = false`: app stays open, OAuth UI and guards stay off
- `AUTH_ENABLED = true`: page guards, sign-in/sign-out UI, and proxy protection turn back on

1. Create a Google OAuth client in Google Cloud.
2. Add `http://localhost:3000/api/auth/callback/google` as an authorized redirect URI.
3. Copy `.env.example` to `.env.local` and fill in:
	- `AUTH_SECRET`
	- `AUTH_GOOGLE_ID`
	- `AUTH_GOOGLE_SECRET`
4. Start the app with `npm run dev`.

To re-enable OAuth in the app flow, set `AUTH_ENABLED` to `true`.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
