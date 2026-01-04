import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Cursor } from "@/components/ui/Cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PHI INDIA - Innovating Tomorrow's Technology",
  description: "PHI INDIA is dedicated to Digital Innovation, Engineering Excellence, and Future Technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-pink-50 to-blue-50 text-gray-800 antialiased`}>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
