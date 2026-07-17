import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Varun Walia | Full-Stack Developer & Data Analyst",
  description:
    "Portfolio of Varun Walia — full-stack developer and data analyst building real-world web applications and data analytics projects, targeting data science.",
  keywords: [
    "Varun Walia",
    "Full-Stack Developer",
    "Data Analyst",
    "Data Science",
    "Portfolio",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Varun Walia" }],
  openGraph: {
    title: "Varun Walia | Full-Stack Developer & Data Analyst",
    description:
      "Portfolio of Varun Walia — full-stack developer and data analyst building real-world web applications and data analytics projects.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Varun Walia | Full-Stack Developer & Data Analyst",
    description:
      "Portfolio of Varun Walia — full-stack developer and data analyst.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
