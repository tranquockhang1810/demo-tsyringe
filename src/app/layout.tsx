import type { Metadata } from "next";
import "./globals.css";
import "@/DependenciesInjection";

export const metadata: Metadata = {
  title: "Todo App",
  description: "Clean Architecture with Next.js + tsyringe",
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
