"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
// import { Font } from "public/fonts/Font";
import localFont from 'next/font/local'


const iranSans = localFont({
  src: [
    {
      path: "../../public/fonts/IRANSansWeb(FaNum)/IRANSansWeb(FaNum).woff2",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANSansWeb(FaNum)_Black/IRANSansWeb(FaNum)_Black.woff2",
      style: "Black",
    },
    {
      path: "../../public/fonts/IRANSansWeb(FaNum)_Bold/IRANSansWeb(FaNum)_Bold.woff2",
      style: "Bold",
    },
    {
      path: "../../public/fonts/IRANSansWeb(FaNum)_Light/IRANSansWeb(FaNum)_Light.woff2",
      style: "Light",
    },
    {
      path: "../../public/fonts/IRANSansWeb(FaNum)_Medium/IRANSansWeb(FaNum)_Medium.woff2",
      style: "Medium",
    },
    {
      path: "../../public/fonts/IRANSansWeb(FaNum)_UltraLight/IRANSansWeb(FaNum)_UltraLight.woff2",
      style: "UltraLight",
    },

  ],
})



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="fa" dir="rtl">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head >
      </head>

      <body className={`bg-[#FCFCFC] dark:bg-black ${iranSans.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
