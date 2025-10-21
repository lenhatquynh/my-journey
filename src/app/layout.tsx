import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import GoogleAnalytics from "./_components/GoogleAnalytic";
import "./globals.css";

const ibmMono = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hi! I am Quynh Le",
  description:
    "Innovative and dedicated Software Engineer, with a passion for transforming ideas into impactful digital solutions.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "Quynh Le",
    "Quỳnh Lê",
    "Le Nhat Quynh",
    "Lê Nhật Quỳnh",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://quynhle.id.vn",
  },
  metadataBase: new URL("https://quynhle.id.vn"),
  openGraph: {
    images: ["/avatar.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibmMono.className}>{children}</body>
      <GoogleAnalytics />
    </html>
  );
}
