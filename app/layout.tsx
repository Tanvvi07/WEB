import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Contact Form App",
  description: "Single-page responsive web application with contact form",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

