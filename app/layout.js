import { Inter, Press_Start_2P } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });
export const pressStart = Press_Start_2P({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "JIT Platform",
  description: "Platform for the JIT Contest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Suspense>{children}</Suspense>
      </body>
    </html>
  );
}
