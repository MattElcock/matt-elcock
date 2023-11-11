import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Image from "next/image";
import { Container } from "@/components/Container";

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
        <header>
          <Container colourdBackground>
            <div className="flex justify-end gap-5">
              <a
                href="https://www.linkedin.com/in/matthewelcock/"
                target="_blank"
              >
                <Image
                  src="/img/linkedin.svg"
                  alt="LinkedIn"
                  width={30}
                  height={30}
                  priority
                />
              </a>
              <a href="https://www.instagram.com/mattiose/" target="_blank">
                <Image
                  src="/img/instagram.svg"
                  alt="Instagram"
                  width={30}
                  height={30}
                  priority
                />
              </a>
            </div>
          </Container>
        </header>
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
