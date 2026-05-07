import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import PostHogProvider from "@/components/PostHogProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Agile Labs — Operational software, shipped on a modern stack.",
  description:
    "We digitize the operations your business still runs on paper — billing, inventory, dispatch, and field work — into mobile platforms that work offline, report in real time, and reach your customers on WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
