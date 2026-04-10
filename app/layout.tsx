import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "G-Row",
  description: "changeme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full bg-white">
      <body className="flex min-h-screen flex-col antialiased">{children}</body>
    </html>
  );
}
