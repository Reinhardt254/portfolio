import Navbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Teko } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });
const headingsFont = Teko({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
 
export const metadata: Metadata = {
  title: "Reinhardt Lagat | Software engineer",
  description:
    "An experinced Software Engineer, Software developer, web developer based in Nairobi Kenya",
  icons: {
    icon: "/logo/logo.png",
    apple: "/logo/logo.png",
  },
  keywords: [
    "kipchirchir",
    "Reinhardt Kipchirchir",
    "Reinhardt",
    "Reinhardt Lagat",
    "Reinhardt kipchirchir lagat",
    "Lagat",
    "software engineer",
    "web developer",
    "portfolio",
    "fullstack developer",
    "software developer",
  ],
  alternates: {
    canonical: "https://reinhardtdev.com/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${headingsFont.className} ${inter.className} `}>
        <div className="bg-slate-950 min-h-screen flex flex-col justify-between items-center h-full w-full">
          <div className="z-50 sticky top-0 w-full flex justify-center items-center">
            <div className="navbar">
              <Navbar />
            </div>
          </div>
          {children}
          <div className="footer">
            <Footer />
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
