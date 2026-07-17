import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://academiccommission.vercel.app"),

  title: {
    default: "Academic Commission by Ja",
    template: "%s | Academic Commission by Ja",
  },

  description:
    "Academic Commission by Ja provides trusted academic writing, research assistance, thesis support, PowerPoint presentations, essays, case studies, editing, and other academic services for Filipino students. Quality Work. On Time. Every Time.",

  applicationName: "Academic Commission by Ja",

  keywords: [
    "Academic Commission by Ja",
    "Academic Services Philippines",
    "Academic Writing",
    "Research Assistance",
    "Research Paper",
    "Research Title",
    "Research Proposal",
    "RRL",
    "RRS",
    "Chapter 1",
    "Chapter 2",
    "Chapter 3",
    "Chapter 4",
    "Chapter 5",
    "Thesis Assistance",
    "Essay Writing",
    "Reflection Paper",
    "Reaction Paper",
    "Position Paper",
    "Case Study",
    "PowerPoint Presentation",
    "Infographic",
    "Poster Design",
    "Proofreading",
    "Grammar Checking",
    "Formatting",
    "College Students Philippines",
    "Academic Help",
    "School Requirements",
    "Pagawa Assignment",
    "Pagawa Research",
    "Research Defense",
    "Research Statistics",
    "Academic Commission",
    "acadcommsbyja",
  ],

  authors: [
    {
      name: "Academic Commission by Ja",
      url: "https://academiccommission.vercel.app",
    },
  ],

  creator: "Academic Commission by Ja",
  publisher: "Academic Commission by Ja",

  category: "Education",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://academiccommission.vercel.app",
  },

  openGraph: {
    title: "Academic Commission by Ja",
    description:
      "Premium academic writing and research services delivered with precision, integrity, and on-time results.",

    url: "https://academiccommission.vercel.app",

    siteName: "Academic Commission by Ja",

    locale: "en_PH",

    type: "website",

    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Academic Commission by Ja",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Academic Commission by Ja",
    description:
      "Premium academic writing and research services delivered with precision, integrity, and on-time results.",
    images: ["/logo.jpg"],
    creator: "@acadcommsbyja",
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],

    apple: "/apple-touch-icon.png",
  },

  verification: {
  google: "--DSaw5uTl1aN1QEVHIhQZ5rVKIKQxf1P3INcfozdxw",
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-PH"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}