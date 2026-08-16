import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "capsloop | Web & App Development, Graphics & Video Editing Agency",
  description: "capsloop is a premier digital agency specializing in high-performance Web Development, Mobile Applications, Graphics Design, and Video Editing. Check out our products like ZeTap.",
  keywords: [
    "Web Development",
    "App Development",
    "Graphics Design",
    "Video Editing",
    "Digital Business Cards",
    "ZeTap",
    "capsloop",
    "SEO Agency",
    "Software Development"
  ],
  authors: [{ name: "capsloop team" }],
  openGraph: {
    title: "capsloop | Premier Web & App Agency",
    description: "High-performance digital services and custom software products.",
    url: "https://capsloop.com",
    siteName: "capsloop",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "capsloop | Premier Web & App Agency",
    description: "High-performance digital services and custom software products.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-black text-white font-sans selection:bg-orange-primary selection:text-black">
        {children}
      </body>
    </html>
  );
}
