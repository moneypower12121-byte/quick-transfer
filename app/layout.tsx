import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://quicktransfer.site"),
  title: "QuickTransfer – Send Files Free, No Sign-Up",
  description: "Share files online instantly — no account, no hassle. QuickTransfer lets you send documents, photos & videos securely in seconds. Try it free now.",
  keywords: "send files online, free file transfer, no sign up, share files online instantly, secure file transfer, send large files, no login, file sharing online, data transfer, free file upload, link transfer, files between devices",
  authors: [{ name: "QuickTransfer" }],
  robots: "index, follow",
  openGraph: {
    title: "QuickTransfer – Send Files Free, No Sign-Up",
    description: "Share files online instantly — no account, no hassle. QuickTransfer lets you send documents, photos & videos securely in seconds.",
    url: "https://quicktransfer.site",
    siteName: "QuickTransfer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuickTransfer – Send Files Free, No Sign-Up",
    description: "Share files online instantly — no account, no hassle. QuickTransfer lets you send documents, photos & videos securely in seconds.",
    images: ["/og-image.png"],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#ef4444",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            <div className="min-h-screen flex flex-col hero-gradient dark:bg-slate-900">
              <Header />
              {children}
              <footer className="bg-gray-50/50 dark:bg-slate-900/80 py-8 md:py-12 border-t border-gray-100 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">© 2026 QuickTransfer Inc. All rights reserved.</p>
                </div>
              </footer>
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
