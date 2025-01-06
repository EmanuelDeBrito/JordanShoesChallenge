import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const getArchivo = Archivo();

export const metadata: Metadata = {
  title: "Jordan Shoes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${getArchivo}`}>
        {children}
      </body>
    </html>
  );
}
