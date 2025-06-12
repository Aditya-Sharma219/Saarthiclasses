import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from 'react-hot-toast'
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saarthi Classes",
  keywords: ["Saarthi Classes", "Online Education", "Coaching", "Courses", "Notes"],
  authors: [{ name: "Saarthi Classes" }],
  creator: "Saarthi Classes",
  description: "Saarthi Classes - Your Path to Success in Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {/* Main content */}
        {children}
        <Toaster position="top-center" />
        <Footer />
        {/* Footer */}
      </body>
    </html>
  );
}
