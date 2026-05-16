import type { Metadata } from "next";
import localFont from "next/font/local";
import { Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import CursorGlow from "@/components/animations/CursorGlow";

// We use standard next/font/google for Sora
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "Sajida Javed | AI Engineer & Full Stack Developer",
  description: "Portfolio of Sajida Javed, AI Engineer and Laravel Full Stack Developer specializing in scalable AI-powered applications.",
  keywords: ["AI Engineer Portfolio", "Laravel Developer Portfolio", "Full Stack Developer Pakistan", "AI Integration Engineer", "Python AI Engineer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${sora.variable} font-sans antialiased bg-ai-bg text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <CursorGlow />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
