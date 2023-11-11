import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matt Elcock",
  description: "The personal website of Matt Elcock.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="w-screen h-20 bg-violet-700 mb-5"></header>
        <div>{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
