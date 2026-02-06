import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "90s Wala Games | Relive Your Childhood Gaming Memories",
  description: "Play classic 90s games like Tekken 3, Vice City, Contra & more online in stunning UHD. No ads, affordable plans, multiplayer support. Join the waitlist!",
  keywords: "retro games, 90s games, childhood games, online gaming, Tekken, Vice City, Contra, multiplayer games, Indian games",
  openGraph: {
    title: "90s Wala Games | Relive Your Childhood Gaming Memories",
    description: "Play classic 90s games online in stunning UHD. No ads, affordable plans, multiplayer support.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
