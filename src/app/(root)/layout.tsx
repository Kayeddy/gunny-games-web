import type { Metadata } from "next";
import Head from "next/head";
import "../globals.css";
import localFont from "next/font/local";
import Header from "@/components/shared/Header";
import { NextUIProvider } from "@nextui-org/react";
import ClientLoaderWrapper from "@/wrappers/ClientLoaderWrapper";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Gunny Games - Unleash the Elements in Blockchain Gaming",
  description:
    "Join Gunny Games and experience the thrill of blockchain-based gaming. Unleash unique elemental powers, earn rewards, and dominate the leaderboard!",
};

const Valorant = localFont({ src: "../../../public/fonts/Valorant.ttf" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.yoursite.com/" />
        <link
          rel="stylesheet"
          href="https://db.onlinewebfonts.com/c/b2437a24f47a94383eb02858f8a4df97?family=Insomnia"
        />
        <link
          rel="stylesheet"
          href="https://db.onlinewebfonts.com/c/e7322a6673613ab13604fadda3d20e56?family=VALORANT"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.css"
        />
        <meta
          property="og:title"
          content="Gunny Games - Unleash the Elements in Blockchain Gaming"
        />
        <meta
          property="og:description"
          content="Join Gunny Games and experience the thrill of blockchain-based gaming. Unleash unique elemental powers, earn rewards, and dominate the leaderboard!"
        />
        <meta property="og:image" content="/assets/icons/icongunny_100.webp" />
        <meta property="og:url" content="https://www.gunnygames.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Gunny Games - Unleash the Elements in Blockchain Gaming"
        />
        <meta
          name="twitter:description"
          content="Join Gunny Games and experience the thrill of blockchain-based gaming. Unleash unique elemental powers, earn rewards, and dominate the leaderboard!"
        />
        <meta name="twitter:image" content="/assets/icons/icongunny_100.webp" />
      </Head>
      <GoogleAnalytics />
      <body className={`${Valorant.className}`}>
        <NextUIProvider>
          <ClientLoaderWrapper />
          <Header />
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
