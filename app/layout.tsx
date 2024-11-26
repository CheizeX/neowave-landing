import { siteConfig } from "@/config/site-config";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const transducerRegular = localFont({
  src: "./fonts/transducer/TransducerRegular.otf",
  variable: "--font-transducer-regular",
  weight: "400",
});
const transducerMedium = localFont({
  src: "./fonts/transducer/TransducerBold.otf",
  variable: "--font-transducer-medium",
  weight: "500",
});
const transducerHairline = localFont({
  src: "./fonts/transducer/TransducerLight.otf",
  variable: "--font-transducer-hairline",
  weight: "100",
});
const transducerBold = localFont({
  src: "./fonts/transducer/TransducerExtraBold.otf",
  variable: "--font-transducer-extrabold",
  weight: "700",
});
const transducerBlack = localFont({
  src: "./fonts/transducer/TransducerBlack.otf",
  variable: "--font-transducer-black",
  weight: "900",
});
const biotcountMonoLight = localFont({
  src: "./fonts/biotcount-mono-single/BitcountMonoSingleLight.otf",
  variable: "--font-biotcount-light",
  weight: "300",
});
const biotCountMonoRegular = localFont({
  src: "./fonts/biotcount-mono-single/BitcountMonoSingleRegular.otf",
  variable: "--font-biotcount-regular",
  weight: "400",
});
const biotCountMonoBook = localFont({
  src: "./fonts/biotcount-mono-single/BitcountMonoSingleBook.otf",
  variable: "--font-biotcount-book",
  weight: "500",
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <link rel='icon' href='/images/logo.svg' type='image/svg+xml' />
      <body
        className={`dark ${transducerRegular.variable} ${transducerMedium.variable} ${transducerHairline.variable} ${transducerBold.variable} ${transducerBlack.variable}
        ${biotcountMonoLight.variable} ${biotCountMonoRegular.variable} ${biotCountMonoBook.variable}
        antialiased`}>
        <SpeedInsights />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
