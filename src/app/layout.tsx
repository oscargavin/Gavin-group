import type { Metadata } from "next";
import { CustomCursor } from "@/components/VisualEffects";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Gavin Group | AI and Software Consultancy",
    template: "%s | Gavin Group",
  },
  description:
    "Transform your business with cutting-edge AI and software solutions. Expert consultancy in machine learning, cloud architecture, and custom development.",
  metadataBase: new URL("https://gavingroup.com"),
  keywords: [
    "AI consultancy",
    "software development",
    "machine learning",
    "cloud architecture",
    "digital transformation",
    "tech consulting",
  ],
  authors: [{ name: "Gavin Group" }],
  creator: "Gavin Group",
  publisher: "Gavin Group",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gavingroup.com",
    title: "Gavin Group | AI and Software Consultancy",
    description:
      "Transform your business with cutting-edge AI and software solutions. Expert consultancy in machine learning, cloud architecture, and custom development.",
    siteName: "Gavin Group",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gavin Group | AI and Software Consultancy",
    description:
      "Transform your business with cutting-edge AI and software solutions.",
    creator: "@gavingroup",
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
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://gavingroup.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}
