import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MatematikON6-8 — matematika korak po korak",
  description:
    "Interaktivne lekcije, zadaci i Pametno vežbanje za 6, 7. i 8. razred.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr-Latn">
      <body className="antialiased">{children}</body>
    </html>
  );
}
