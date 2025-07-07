import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "AI ASSISTANT",
  description: "Your 24/7 Business AI Assistant",
  openGraph: {
    title: "AI ASSISTANT",
    description: "Your 24/7 Business AI Assistant",
    images: [
      {
        url: "https://res.cloudinary.com/dzow59kgu/image/upload/v1751921691/Screenshot_2025-07-08_015931_kml6go.png", // Relative to the public/ directory
        width: 1200,
        height: 630,
        alt: "AI Assistant Preview Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI ASSISTANT",
    description: "Your 24/7 Business AI Assistant",
    images: [
      "https://res.cloudinary.com/dzow59kgu/image/upload/v1751921691/Screenshot_2025-07-08_015931_kml6go.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
