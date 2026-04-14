import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

// ── Global Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://quicktransfer.site"),

  // ── Core ──────────────────────────────────────────────────────────────────
  title: "QuickTransfer – Send Files Free, No Sign-Up",
  description:
    "Share files online instantly — no account, no hassle. QuickTransfer lets you send documents, photos & videos securely in seconds. Try it free now.",
  keywords:
    "send files online, free file transfer, no sign up, share files online instantly, secure file transfer, send large files, no login, file sharing online, data transfer, free file upload, link transfer, files between devices",
  authors: [{ name: "QuickTransfer" }],
  robots: { index: true, follow: true },

  // ── Canonical ─────────────────────────────────────────────────────────────
  alternates: {
    canonical: "https://quicktransfer.site/",
    types: {
      "application/xml": "/sitemap.xml",
    },
  },

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    title: "QuickTransfer – Send Files Free, No Sign-Up",
    description:
      "Send files instantly with a secure 6-digit code. No login, no registration. Works on any device.",
    url: "https://quicktransfer.site/",
    siteName: "QuickTransfer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "QuickTransfer – Free File Sharing Tool",
      },
    ],
  },

  // ── Twitter Card ──────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "QuickTransfer – Send Files Free, No Sign-Up",
    description:
      "Send files instantly with a secure 6-digit code. No login required. Works on any device.",
    images: ["/og-image.png"],
  },

  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#ef4444",
};

// ── JSON-LD Schema ─────────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "QuickTransfer",
      url: "https://quicktransfer.site/",
      description:
        "Free online file transfer tool. No sign-up required. Share files instantly using a secure 6-digit code.",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      featureList: [
        "No sign-up required",
        "100MB file size limit",
        "6-digit secure transfer code",
        "End-to-end encryption",
        "Works on all devices and browsers",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "1250",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is QuickTransfer free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, QuickTransfer is 100% free with no hidden subscriptions or data collection.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need an account to send files?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No account needed. Just upload your file, get a 6-digit code, and share it with the recipient.",
          },
        },
        {
          "@type": "Question",
          name: "What is the maximum file size?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can share files up to 100MB per transfer for free.",
          },
        },
        {
          "@type": "Question",
          name: "How long do transfer codes last?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Codes expire in 10 minutes by default to keep your data private and secure.",
          },
        },
        {
          "@type": "Question",
          name: "How to send files without login?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can use QuickTransfer to send files instantly without creating an account. Simply upload your file, receive a 6-digit code, and share it with the recipient.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
