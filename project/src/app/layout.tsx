import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";

const getArchivo = Archivo();

const getSpaceGrotesk = Space_Grotesk();

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
      <body className={`${getArchivo} ${getSpaceGrotesk}`}>
        {children}
      </body>
    </html>
  );
}
