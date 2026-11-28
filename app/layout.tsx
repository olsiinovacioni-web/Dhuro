import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dhuro",
  description: "Dhuro - Ndihmo boten me zemer",
  manifest: "/manifest.json",
  icons: {
    icon: "/apple-touch-icon.png.jpeg",
    shortcut: "/apple-touch-icon.png.jpeg",
    apple: "/apple-touch-icon.png.jpeg",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Dhuro",
  },
};

export const viewport = {
  themeColor: "#16a34a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sq">
      <head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png.jpeg" />
        <link rel="icon" href="/apple-touch-icon.png.jpeg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
