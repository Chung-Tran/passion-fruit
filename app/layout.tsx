import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/layout/header";
import { Providers } from "./providers";
import Footer from "./components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'), // Thay đổi domain của bạn
  title: {
    default: 'Your Site Name', // Tên mặc định của website
    template: '%s | Your Site Name', // Template cho các trang con
  },
  description: 'Your site description here',
  keywords: [
    'Next.js',
    'React',
    'Web Development',
    // Thêm các từ khóa liên quan
  ],
  authors: [
    {
      name: 'Your Name',
      url: 'https://your-website.com',
    }
  ],
  creator: 'Your Name',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://your-domain.com',
    title: 'Your Site Name',
    description: 'Your site description',
    siteName: 'Your Site Name',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Your Site Name',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Site Name',
    description: 'Your site description',
    images: ['/og-image.jpg'],
    creator: '@yourtwitter',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    // Thêm các verification khác nếu cần
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <Providers>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Providers>

      </body>
    </html>
  );
}