import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MenuFlow — Your Menu, Always Fresh",
  description: "Update restaurant menus instantly and publish beautiful customer experiences in real time.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
