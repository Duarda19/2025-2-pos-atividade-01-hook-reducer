import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TarefaProvider } from "@/data/ContextTarefa"; // importe aqui

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Infoweb-Atividade",
  description: "Atividade 1 do 2o bimestre com hook reducer e shadcnui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TarefaProvider> {/* <<< Envolvendo todo app */}
          {children}
        </TarefaProvider>
      </body>
    </html>
  );
}
