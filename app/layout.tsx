import { Footer, Navbar } from "@/components";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Books Search",
  description: "Search through books from Google Books API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
