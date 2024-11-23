import type { Metadata } from "next";
import Head from "next/head";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

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
  title: "Ankit Ojha - Portfolio",
  description: "Responsive portfolio in next js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="grid grid-cols-12 gap-6 h-screen lg:p-10 text-center">
          <div className="lg:col-span-4 rounded-xl col-span-12 bg-black border border-gray-900 p-8">
            <Sidebar />
          </div>
          <div className="lg:col-span-8 rounded-xl col-span-12 bg-black border border-gray-900 p-8 flex flex-col gap-8">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
