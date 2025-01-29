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
  title: "Jarvis AI - Open Source AI Assistant",
  description: "An open source AI assistant powered by LLaMA, Google Gemini 2.0, GPT4 and Whisper, capable of executing Ubuntu commands, managing multimedia, and Google Calendar integration.",
  keywords: "AI Assistant, Open Source, LLaMA, Google Gemini, GPT4, Whisper, Ubuntu, Voice Commands",
  openGraph: {
    title: "Jarvis AI - Open Source AI Assistant",
    description: "An open source AI assistant powered by multiple LLMs",
    url: "https://github.com/stevenvo780/jarvisIAV2",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Jarvis AI - Open Source AI Assistant",
    description: "An open source AI assistant powered by multiple LLMs"
  }
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
