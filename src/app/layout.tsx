import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Justin Dwinata - Portfolio",
  description: "Personal portfolio of Justin Dwinata, Informatics Student & IT Enthusiast",
  openGraph: {
    title: "Justin Dwinata - Portfolio",
    description: "Informatics Student building web, AI, and data projects",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
