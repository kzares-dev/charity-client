import type { Metadata } from "next";
import { ReactNode } from "react";
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from "@/components/ui/toaster"
import "./globals.css";
import StoreProvider from "@/lib/store/provider/storeProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <NextTopLoader showSpinner={false} color="#000" />
          <StoreProvider>
          {children}
          </StoreProvider >
        <Toaster />
      </body>
    </html>
  );
}
