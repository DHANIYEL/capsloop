import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Templates from "./templates";

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
const CookGothif = localFont({
  src: [
    {
      path: "../public/fonts/CookGothif.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-cook-gothif",
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
      <body
        className={`${NobelUno.variable} ${CookGothif.variable} antialiased`}
      >
        <Templates>{children}</Templates>
      </body>
    </html>
  );
}
