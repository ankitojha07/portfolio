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
        <div className="lg:flex lg:h-screen bg-black text-gray-300 font-sans">
          {/* Fixed Sidebar on Large Screens */}
          <aside className="w-full lg:w-1/4 border-r border-gray-900 lg:fixed lg:top-0 lg:left-0  bg-black">
            <Sidebar />
          </aside>

          {/* Main Content Area Scrollable */}
          <main className="w-full lg:w-3/4 lg:ml-[25%] p-8 h-full lg:h-screen">
            <Navbar />
            <div className="h-10 text-3xl"></div>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
