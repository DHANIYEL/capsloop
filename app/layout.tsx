import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

// Load multiple weights of NobelUno
const NobelUno = localFont({
  src: [
    {
      path: "../public/fonts/NobelUno-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/NobelUno-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/NobelUno-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-nobel-uno",
  display: "swap",
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
      {/* Attach the font variable globally */}
      <body className={`${NobelUno.variable} antialiased`}>{children}</body>
    </html>
  );
}
