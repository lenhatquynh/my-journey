import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
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
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/avatar.png",
        type: "image/png",
      },
    ],
  },
  keywords: [
    "Quynh Le",
    "Le Nhat Quynh",
    "Quynh Le Developer",
    "Le Nhat Quynh Developer",
    "Quynh Le Software Engineer",
    "Le Nhat Quynh Software Engineer",
    "Quynh Le Full Stack Developer",
    "Le Nhat Quynh Full Stack Developer",
    "Quynh Le Frontend Developer",
    "Le Nhat Quynh Frontend Developer",
    "Quynh Le Backend Developer",
    "Le Nhat Quynh Backend Developer",
    "Quynh Le Web Developer",
    "Le Nhat Quynh Web Developer",
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
    siteName: "Quynh Le Dev",
    title: "Quynh Le Dev",
    description:
      "Innovative and dedicated Software Engineer, with a passion for transforming ideas into impactful digital solutions.",
    url: "https://quynhle.id.vn",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/avatar.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9ME1XDLE0L"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-9ME1XDLE0L');
            `}
        </Script>

        {/* Change schema name */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Quynh Le Dev",
              alternateName: [
                "Quynh Le Developer",
                "Quynh Le Software Engineer",
              ],
              url: "https://quynhle.id.vn/",
            }),
          }}
        />
      </head>
      <body className={ibmMono.className}>{children}</body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
