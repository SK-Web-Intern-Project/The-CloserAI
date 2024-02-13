import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Claude + Langchain',
  description: 'Claude Inspired UI Kit for Langchain apps.'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="{inter.className}" style={{ backgroundColor: "#efede6" }}>{children}</body>
    </html>
  );
}
