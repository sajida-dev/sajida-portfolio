import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://sajidajaved.netlify.app/"),
  title: {
    default: "Sajida Javed | Full Stack Laravel Developer & Backend Engineer",
    template: "%s | Sajida Javed",
  },
  description: "Portfolio of Sajida Javed — Full Stack Laravel Developer & Backend Engineer specializing in web application development services, multi-tenant SaaS platforms, PHP, Python, and scalable API architectures.",
  keywords: [
    "Full Stack Laravel Developer",
    "Hire Laravel Developer",
    "Backend Engineer Laravel",
    "PHP Developer Jobs",
    "SaaS Systems Developer",
    "Web Application Development Service",
    "Python Web Developer",
    "Laravel Web Application Development",
    "Remote Software Engineer",
    "Full Stack Web Development",
    "Freelance PHP Developer",
    "Backend Software Developer Remote",
    "Data Analysis with Python",
    "Software Developer Pakistan"
  ],
  authors: [{ name: "Sajida Javed" }],
  creator: "Sajida Javed",
  publisher: "Sajida Javed",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.webp", type: "image/webp" }
    ],
    shortcut: "/favicon.webp",
    apple: "/favicon.webp"
  },
  openGraph: {
    title: "Sajida Javed | Full Stack Laravel Developer & Backend Engineer",
    description: "Full Stack Laravel Developer & Backend Engineer specializing in web application development services, multi-tenant SaaS platforms, PHP, and Python architectures.",
    url: "https://sajidajaved.netlify.app/",
    siteName: "Sajida Javed Portfolio",
    images: [
      {
        url: "/sajida-javed-brand-logo.webp",
        width: 1200,
        height: 630,
        alt: "Sajida Javed - Software Engineer Brand Logo"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sajida Javed | Full Stack Laravel Developer & Backend Engineer",
    description: "Portfolio of Sajida Javed — Full Stack Laravel Developer, PHP & Python Backend Software Engineer.",
    images: ["/sajida-javed-brand-logo.webp"],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://sajidajaved.netlify.app/#person",
      "name": "Sajida Javed",
      "jobTitle": "Full Stack Laravel Developer & Backend Engineer",
      "description": "Full Stack Laravel Developer and Backend Engineer specializing in web application development services, multi-tenant SaaS platforms, PHP, Python, and scalable backend systems.",
      "url": "https://sajidajaved.netlify.app/",
      "sameAs": [
        "https://github.com/sajidajaved",
        "https://linkedin.com/in/sajida-javed"
      ],
      "knowsAbout": [
        "Laravel",
        "PHP",
        "Python",
        "React",
        "Vue.js",
        "SaaS Systems Architecture",
        "REST APIs",
        "Database Optimization",
        "Web Application Development Services",
        "Data Analysis with Python",
        "Machine Learning"
      ]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://sajidajaved.netlify.app/#service",
      "name": "Sajida Javed - Web Application Development Services",
      "url": "https://sajidajaved.netlify.app/",
      "provider": {
        "@id": "https://sajidajaved.netlify.app/#person"
      },
      "serviceType": [
        "Full Stack Web Development",
        "Laravel Web Application Development",
        "Backend Engineering",
        "SaaS Development Services",
        "Python & API Development"
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="font-sans antialiased bg-white text-slate-900"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
