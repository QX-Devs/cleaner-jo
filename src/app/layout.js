import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = "https://cleaner-jo.example";
const siteTitle = "كلينر جو | شركة تنظيف في الأردن وعمان";
const siteDescription =
  "كلينر جو شركة تنظيف في الأردن وعمان تقدم تنظيف منازل ومكاتب ومطاعم وشاليهات، درايكلين كنب وسجاد وفرشات وستائر وبرادي، تنظيف سيارات وتنظيف بعد التشطيب.";
const siteKeywords = [
  "درايكلين",
  "تنظيف",
  "تنظيف كنب",
  "تنظيف سجاد",
  "تنظيف فرشات",
  "تنظيف برادي",
  "تنظيف ستائر",
  "تنظيف سيارات",
  "تنظيف بعد التشطيب",
  "تنظيف ورشة",
  "تنظيف بيت",
  "تنظيف شقة",
  "تنظيف شاليهات",
  "تنظيف فيلا",
  "تنظيف مكاتب",
  "تنظيف كافيه",
  "تنظيف مطعم",
  "كلينر",
  "كلينر جو",
  "شركة تنظيف في الأردن",
  "شركة تنظيف في عمان",
  "تنظيف منازل في الأردن",
  "تنظيف مفروشات في الأردن",
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "CleaningService"],
  name: "Cleaner Jo / كلينر جو",
  alternateName: "كلينر جو",
  url: siteUrl,
  telephone: "+962790350319",
  image: `${siteUrl}/cleaner1.jpeg`,
  areaServed: [
    {
      "@type": "Country",
      name: "Jordan",
    },
    {
      "@type": "City",
      name: "Amman",
    },
  ],
  serviceType: [
    "cleaning services",
    "dry cleaning",
    "upholstery cleaning",
    "carpet cleaning",
    "curtain cleaning",
    "car interior cleaning",
    "post-construction cleaning",
  ],
  sameAs: [
    "https://www.instagram.com/cleaner.for.cleaning?igsh=aXEyaGNzZ3Z0OXRs",
    "https://www.facebook.com/share/18eAL3JLfV/",
  ],
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: siteKeywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Cleaner Jo / كلينر جو",
    locale: "ar_JO",
    type: "website",
    images: [
      {
        url: "/cleaner1.jpeg",
        width: 1200,
        height: 630,
        alt: "كلينر جو - شركة تنظيف في الأردن",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/cleaner1.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body dir="rtl" className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
