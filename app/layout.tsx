import ButtonToTop from "@/components/ButtonToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Izrada termo bazena po meri - Grad Mont",
  description:
    "Profesionalna izrada termo bazena po najmodernijim standardima. Prilagođeni oblici, dimenzije i oprema - Grad Mont, bazeni bez kompromisa.",
  icons: {
    icon: "/1.jpg",
    apple: "/1.jpg",
  },
  keywords: [
    "izrada bazena",
    "termo bazeni",
    "gradnja bazena",
    "bazeni po meri",
    "montaža bazena",
    "Grad Mont",
    "betonski bazeni",
    "savremeni bazeni",
    "termo blok bazeni",
  ],
  alternates: {
    canonical: "https://www.izrada-bazena.rs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-muted-foreground bg-muted`}
      >
        <Header />
        {children}
        <ButtonToTop />
        <Footer />
      </body>
    </html>
  );
}
