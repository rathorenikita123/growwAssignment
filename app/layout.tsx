import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/src/components/header";

import Cart from "@/src/pages/cart";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InstaPayments",
  description: "SDE Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
      </body>
    </html>
  );
}
