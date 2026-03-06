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

export const metadata: Metadata = {
  title: "Chao Vanthoung - Full-Stack Developer Portfolio",
  description:
    "Portfolio of Chao Vanthoung, a Computer Science graduate and Full-Stack Developer experienced in React, Next.js, Spring Boot, and Microservice Architecture.",
  keywords: [
    "Chao Vanthoung",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Portfolio",
    "Spring Boot",
    "Microservices",
    "Web Developer Cambodia",
  ],
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
        {children}
      </body>
    </html>
  );
}
