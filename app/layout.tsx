import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DVL | AI-Powered Smart Textile Platform",

  description:
    "DVL is an AI-powered smart textile platform for elite ice hockey, combining wearable technology, embedded electronics and real-time performance analytics.",

  keywords: [
    "DVL",
    "Smart Textile",
    "Sports Technology",
    "Ice Hockey",
    "Wearable Technology",
    "Artificial Intelligence",
    "Performance Analytics",
    "Embedded Systems",
  ],

  authors: [
    {
      name: "Kaan Develioğlu",
    },
  ],

  creator: "Kaan Develioğlu",

  metadataBase: new URL("https://dvl.vercel.app"),

  openGraph: {
    title: "DVL | AI-Powered Smart Textile Platform",

    description:
      "Smart textile technology for elite athletes powered by artificial intelligence.",

    url: "https://dvl.vercel.app",

    siteName: "DVL",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "DVL",

    description:
      "AI-powered wearable technology for elite sports performance.",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#070B14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`${inter.className} bg-[#070B14] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
