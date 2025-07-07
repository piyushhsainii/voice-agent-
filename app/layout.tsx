import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "AI ASSISTANT",
  description: "Your 24/7 Business AI Assistant",
  openGraph: {
    title: "AI ASSISTANT",
    description: "Your 24/7 Business AI Assistant",
    images: [
      {
        url: "/ref.png", // Relative to the public/ directory
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
    images: ["/ref.png"],
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
      </body>
    </html>
  );
}
