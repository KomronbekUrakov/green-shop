import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Green Shop",
  description: "Green Shop by N48",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logoIcon.svg" />
      </head>
      <body className={inter.className}>
        <Header/>
        <main>
           {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
