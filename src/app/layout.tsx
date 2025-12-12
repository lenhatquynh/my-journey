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
    icon: "/favicon.ico",
  },
  keywords: [
    // Name variations
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

    // Job titles and roles
    "Software Engineer",
    "Full Stack Developer",
    "Fullstack Developer",
    "Full-Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "Software Developer",
    "Full Stack Software Developer",
    "Remote Developer",
    "Freelance Developer",
    "Vietnam Developer",
    "Vietnamese Developer",

    // Technologies - Frontend
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Tailwind CSS",
    "Framer Motion",

    // Technologies - Backend
    "C# Developer",
    ".NET Developer",
    "ASP.NET Developer",
    "Web API Developer",
    "Entity Framework",
    "Dapper",
    "PostgreSQL Developer",
    "SQL Server Developer",
    "Redis Developer",

    // Cloud & DevOps
    "AWS Developer",
    "Cloud Developer",

    // Architecture & Patterns
    "Repository Pattern",
    "EventBus Pattern",
    "SOLID Principles",
    "OOP Developer",
    "Clean Architecture",

    // Tools & Services
    "RabbitMQ",
    "Redux",
    "Tanstack Query",
    "Agile Developer",
    "Scrum Developer",

    // Portfolio & Services
    "Portfolio Website",
    "Developer Portfolio",
    "Software Engineer Portfolio",
    "Web Development Services",
    "Custom Web Development",
    "Full Stack Development Services",

    // Location-based (if applicable)
    "Vietnam Software Engineer",
    "Vietnamese Full Stack Developer",
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
