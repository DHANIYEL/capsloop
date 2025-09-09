import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const cookMono = localFont({
  src: "../public/fonts/CookGothif.ttf",
  variable: "--font-cook-gothif-mono",
});

export const metadata: Metadata = {
  title: "Caps Loop",
  description: "Turn your dreams into Reality",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${cookMono.className} antialiased`}>{children}</body>
    </html>
  );
}
