import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matheus Novais",
  description: "About me end my skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5911231162501990"
        ></script>
        <meta
          name="google-adsense-account"
          content="ca-pub-5911231162501990"
        ></meta>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
