import type { Metadata } from "next";
import { jose_sans, alata } from './fonts'
import "./globals.css";



export const metadata: Metadata = {
  title: "Loop Studio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jose_sans.className} ${alata.className}`}>{children}</body>
    </html>
  );
}
