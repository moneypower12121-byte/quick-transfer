import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QuickTransfer – Send Files Free, No Sign-Up",
  description: "Share files online instantly — no account, no hassle. QuickTransfer lets you send documents, photos & videos securely in seconds. Try it free now.",
  keywords: "send files online, free file transfer, no sign up, share files online instantly, secure file transfer, send large files, no login, file sharing online, data transfer, free file upload, link transfer, files between devices",
  authors: [{ name: "QuickTransfer" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://quicktransfer.site",
  },
  openGraph: {
    title: "QuickTransfer – Send Files Free, No Sign-Up",
    description: "Share files online instantly — no account, no hassle. QuickTransfer lets you send documents, photos & videos securely in seconds. Try it free now.",
    url: "https://quicktransfer.site",
    siteName: "QuickTransfer",
    images: [
      {
        url: "https://quicktransfer.site/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuickTransfer – Send Files Free, No Sign-Up",
    description: "Share files online instantly — no account, no hassle. QuickTransfer lets you send documents, photos & videos securely in seconds. Try it free now.",
    images: ["https://quicktransfer.site/og-image.png"],
  },
  manifest: "/manifest.webmanifest",
  themeColor: "#ef4444",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CL7YE3MPGS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CL7YE3MPGS');
          `}
        </Script>
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3430996153811633"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
