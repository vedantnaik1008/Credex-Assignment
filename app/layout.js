import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Crisp from "@/components/Crisp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
    title: 'SoftSell – Resell Software Easily',
    description:
        'SoftSell helps you resell unused software licenses effortlessly.'
};

export default function RootLayout({ children }) {
  return (
      <html lang='en'>
          <Head>
              {/* Favicon */}
              <link rel='icon' href='/favicon.ico' />

              {/* SEO Meta */}
              <title>{metadata.title}</title>
              <meta name='description' content={metadata.description} />
              <meta
                  name='viewport'
                  content='width=device-width, initial-scale=1'
              />

              {/* Open Graph */}
              <meta property='og:title' content={metadata.title} />
              <meta property='og:description' content={metadata.description} />
              <meta property='og:image' content='/og-image.png' />
              <meta property='og:type' content='website' />
              <meta property='og:url' content='https://your-domain.com' />

              {/* Twitter Card */}
              <meta name='twitter:card' content='summary_large_image' />
              <meta name='twitter:title' content={metadata.title} />
              <meta name='twitter:description' content={metadata.description} />
              <meta name='twitter:image' content='/og-image.png' />
          </Head>
          <body
              className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
              {children}
              <Crisp />
          </body>
      </html>
  );
}
