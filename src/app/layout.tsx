import type { Metadata } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import WelcomeIntro from "@/components/WelcomeIntro";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Guilherme Modler — Full Stack Developer",
  description:
    "Desenvolvedor Full Stack especializado em sites modernos, sistemas web e experiências digitais que geram resultados reais.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${syne.variable} ${jetbrains.variable} antialiased`}>
      <body className="min-h-screen">
        <WelcomeIntro />
        {children}
      </body>
    </html>
  );
}
