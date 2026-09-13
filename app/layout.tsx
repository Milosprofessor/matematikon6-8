import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "МатематикON6-8 — математика корак по корак",
  description:
    "Интерактивне лекције, задаци и Паметно вежбање за 6, 7. и 8. разред.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  other: {
    "codex-preview": "development",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr-Cyrl">
      <body className="antialiased">{children}</body>
    </html>
  );
}
