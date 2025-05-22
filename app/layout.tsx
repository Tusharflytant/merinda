import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Provider } from "@/helper/provider";

import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://LegalClaims.us/"),
  title: { default: "Merinda", template: `%s | Merinda` },
  description: "Stay updated with the latest tech and global news.",
  openGraph: {
    url: "/",
    title: "Merinda",
    description: "",
    images: ["/logo-legal.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Merinda",
    description: "",
    images: ["/logo-legal.png"],
  },
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en">
      
      <body
       className={`${manrope.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>

  <Header />
        {children}
        <div className="mt-30">
          <Footer />
        </div>
        </Provider>
      
      </body>
    </html>
  );
}
