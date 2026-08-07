import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: {
    default: "Justin Dwinata - Portfolio",
    template: "%s | Justin Dwinata",
  },
  description:
    "Personal portfolio of Justin Dwinata, Informatics Student and IT Enthusiast. Web Development, Data Science, Machine Learning, Computer Vision.",
  keywords: [
    "Justin Dwinata",
    "portfolio",
    "informatics",
    "web development",
    "data science",
    "machine learning",
    "computer vision",
    "indonesia",
    "mercubuana",
  ],
  authors: [{ name: "Justin Dwinata", url: "https://github.com/Justindwinata" }],
  creator: "Justin Dwinata",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://justindwinata.github.io",
    title: "Justin Dwinata - Portfolio",
    description:
      "Informatics Student building web, AI, data, and computer vision projects",
    siteName: "Justin Dwinata Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Justin Dwinata - Portfolio",
    description: "Informatics Student & IT Enthusiast",
    creator: "@justindwnt",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#050506",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};
