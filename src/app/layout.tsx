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

import CustomCursor from "../components/CustomCursor";
import Navbar from "../components/Navbar";
import ParticlesBackground from "../components/ParticlesBackground";
import NeuralBackground from "../components/NeuralBackground";

export const metadata: Metadata = {
  title: "Gaurika Bhatt | AI & Data Science Portfolio",
  description: "Portfolio of Gaurika Bhatt, an AI & Data Science enthusiast building intelligent systems and solving real-world problems.",
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
        <ParticlesBackground />
        <NeuralBackground />
        <CustomCursor />
        <Navbar />
        <main className="relative min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
