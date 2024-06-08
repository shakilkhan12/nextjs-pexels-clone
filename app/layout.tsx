
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import Model from "@/components/Model";
import VideoModal from "@/components/VideoModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pexels clone",
  description: "Pexels clone description",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <head>
      <link rel="icon" href="./pexels-icon.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <StoreProvider>
        {children}
        <Model/>
        <VideoModal />
        </StoreProvider>
        
        </body>
    </html>
  );
}
