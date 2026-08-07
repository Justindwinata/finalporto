import type { Metadata } from "next";
import { developer } from "@/lib/data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://justindwinata.vercel.app"),
  title: {
    default: `${developer.fullName} — ${developer.title}`,
    template: `%s | ${developer.fullName}`,
  },
  description: developer.about,
  keywords: [
    "Justin Dwinata",
    "portfolio",
    "informatics student",
    "web development",
    "data science",
    "machine learning",
    "computer vision",
    "Indonesia",
    "Mercu Buana",
  ],
  authors: [{ name: developer.fullName }],
  creator: developer.fullName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://justindwinata.vercel.app",
    title: `${developer.fullName} — ${developer.title}`,
    description: developer.about,
    siteName: `${developer.fullName} Portfolio`,
    images: [{ url: "/images/justin/justin-profile.webp", width: 1200, height: 630, alt: developer.fullName }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${developer.fullName} — ${developer.title}`,
    description: developer.about,
    creator: "@justindwnt",
    images: ["/images/justin/justin-profile.webp"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
