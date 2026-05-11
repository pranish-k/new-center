import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { CENTER_FULL, INSTITUTION } from "@/lib/brand";

export const metadata: Metadata = {
  title: `${CENTER_FULL} | ${INSTITUTION}`,
  description: `Preparing experienced leaders to navigate and drive digital transformation — at ${INSTITUTION}.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
