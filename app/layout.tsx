import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DVL Smart Textile | Performance Analytics for Ice Hockey",
  description:
    "DVL Smart Textile Performance Module — Next-generation textile-integrated hardware and real-time analytics for elite team sports. Starting with ice hockey in Finland.",
  keywords: [
    "ice hockey",
    "performance tracking",
    "wearable technology",
    "smart textile",
    "sports analytics",
    "Finland",
    "athlete monitoring",
    "IMU sensor",
  ],
  authors: [{ name: "DVL Smart Textile Oy" }],
  openGraph: {
    title: "DVL Smart Textile Performance Module",
    description:
      "Textile-integrated performance monitoring for team sports. Measure, analyze, improve, empower.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-dvl-bg text-dvl-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
