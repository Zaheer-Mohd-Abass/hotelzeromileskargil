import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hotel Zero Miles Kargil - Your Perfect Stay in Kargil",
  description: "Experience luxury and comfort at Hotel Zero Miles Kargil. Book your stay with us for an unforgettable experience.",
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
