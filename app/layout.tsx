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
  title: "Dhuro",
  description: "Dhuro - Ndihmo të tjerët",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icon-192.png.jpeg", sizes: "192x192", type: "image/jpeg" },
      { url: "/icon-512.png.jpeg", sizes: "512x512", type: "image/jpeg" },
    ],
    apple: [
      { url: "/apple-touch-icon.png.jpeg", sizes: "180x180", type: "image/jpeg" },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
