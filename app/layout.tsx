import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClarityFlow",
  description: "Scaffolded healthcare SaaS landing page structure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
