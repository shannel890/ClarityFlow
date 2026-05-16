import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClarityFlow",
  description:
    "Conceptual healthcare AI workflow assistant focused on reducing documentation overload and improving clinical productivity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-surface-50 font-sans text-slate-900">{children}</body>
    </html>
  );
}
