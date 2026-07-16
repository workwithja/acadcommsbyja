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
  metadataBase: new URL("https://acadcommsbyja-black.vercel.app"),

  title: {
    default: "Academic Commission by Ja",
    template: "%s | Academic Commission by Ja",
  },

  description:
    "Academic Commission by Ja provides trusted academic writing, research assistance, thesis support, PowerPoint presentations, essays, case studies, and other academic services for Filipino students.",

  keywords: [
    "Academic Commission by Ja",
    "Academic Services",
    "Research Assistance",
    "Thesis Writing",
    "Research Paper",
    "Essay Writing",
    "PowerPoint Presentation",
    "Case Study",
    "Academic Writing",
    "College Students",
    "Philippines",
    "Academic Help",
    "research title",
    "research title ideas",
    "research title about coffee shop",
    "background of the study",
    "statement of the problem",
    "significance of the study",
    "scope and delimitation",
    "definition of terms",
    "rrl",
    "how to make rrl",
    "rrs",
    "chapter 2",
    "chapter 3",
    "research topic ideas"
    "research service",
    "pagawa",
    "assignment help",
    "essay help",
    "academic commission",
    "research ai tool",
    "research defense",
    "research websites to use",
    "schoolwork",
    "thesis assistant services",
    "thesis title ideas",
    "thesis commission",
    "thesis defense",
    "thesis defense tips",
    "acadcommsbyja",
  ],

  authors: [
    {
      name: "Academic Commission by Ja",
    },
  ],

  creator: "Academic Commission by Ja",
  publisher: "Academic Commission by Ja",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Academic Commission by Ja",
    description:
      "Premium academic writing and research services delivered with precision, integrity, and on-time results.",
    url: "https://acadcommsbyja-black.vercel.app",
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
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}