"use client";

import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import { system } from "@/theme";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});


export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body className={`${poppins.variable} `} >
        <Provider system={system}>{children}</Provider>
      </body>
    </html>
  );
}
