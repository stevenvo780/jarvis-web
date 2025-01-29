import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jarvis-web-seven.vercel.app'),
  title: {
    template: '%s | Jarvis AI - Open Source AI Assistant',
    default: 'Jarvis AI - The Most Advanced Open Source AI Assistant for Linux'
  },
  description: "An open source AI assistant powered by LLaMA, Google Gemini 2.0, GPT4 and Whisper, capable of executing Ubuntu commands, managing multimedia, and Google Calendar integration.",
  keywords: "AI Assistant, Open Source, LLaMA, Google Gemini, GPT4, Whisper, Ubuntu, Voice Commands",
  openGraph: {
    title: "Jarvis AI - Open Source AI Assistant",
    description: "An open source AI assistant powered by multiple LLMs",
    url: "https://jarvis-web-seven.vercel.app",
    type: "website",
    siteName: "Jarvis AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jarvis AI - Open Source AI Assistant",
    description: "An open source AI assistant powered by multiple LLMs",
    site: "@stevenvallejo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
