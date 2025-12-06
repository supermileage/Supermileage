import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

import Navbar from "tsx/Navbar";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Supermileage",
  description: "Supermileage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} antialiased`}>
        {/* Global, persistent navigation bar */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}