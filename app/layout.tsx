import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Nour El Hoda Yche — Portfolio",
  description: "Portfolio de Nour El Hoda Yche, étudiante ingénieure en développement full stack.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans antialiased bg-[#0a0e1f] text-white`}>
        <ScrollProgress />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}