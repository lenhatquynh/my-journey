import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./_components/GoogleAnalytic";

const inter = Inter({ subsets: ["latin"] });
const ibmMono = IBM_Plex_Mono({ weight: ['100', '200', '300', '400', '500', '600', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Hi! I am Quynh Le",
  description: "Innovative and dedicated Software Engineer, with a passion for transforming ideas into impactful digital solutions.",
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
