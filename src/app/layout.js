import { Inter, DM_Serif_Display, Radio_Canada_Big } from 'next/font/google';
import './globals.css';
import BootstrapClient from './BootstrapClient';
import Cta from './Home/CTA/cta';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const dmSerif = DM_Serif_Display({
  variable: '--font-dm-serif',
  weight: '400',
  subsets: ['latin'],
});

const radioCanadaBig = Radio_Canada_Big({
  variable: '--font-radio-canada-big',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Basic SEO */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Dr. Uday Ravi - Best Laparoscopic & Laser Surgeon in Bangalore</title>
        <meta
          name="description"
          content="Dr. Uday Ravi offers advanced laparoscopic, laser & robotic surgery in Bangalore. 15+ years experience in minimally invasive procedures with faster recovery. Book consultation today."
        />
        <meta
          name="keywords"
          content="laparoscopic surgeon bangalore, laser surgery bangalore, robotic surgery, hernia repair, piles treatment, varicose veins, gallbladder surgery, minimally invasive surgery, Dr Uday Ravi"
        />
        <meta name="author" content="Dr. Uday Ravi" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        {/* Geo Meta */}
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bangalore, Karnataka, India" />
        <meta name="geo.position" content="12.9716;77.5946" />
        <meta name="ICBM" content="12.9716, 77.5946" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />


        {/* <!-- Preload Critical Resources --> */}
        <link rel="preload" href="/hero-image.png" as="image" />
        {/* Open Graph for Social Sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dr. Uday Ravi - Best Laparoscopic & Laser Surgeon in Bangalore" />
        <meta
          property="og:description"
          content="Expert surgical care with advanced laparoscopic, laser & robotic techniques. 15+ years experience, faster recovery, minimal scarring. Trusted by 5000+ patients."
        />
        <meta property="og:url" content="https://udhay-zeta.vercel.app/" />
        <meta property="og:site_name" content="Dr. Uday Ravi - Surgical Excellence" />
        <meta property="og:image" content="https://udhay-zeta.vercel.app/hero-image.png" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dr. Uday Ravi - Best Laparoscopic & Laser Surgeon in Bangalore" />
        <meta
          name="twitter:description"
          content="Expert surgical care with advanced laparoscopic, laser & robotic techniques. 15+ years experience, faster recovery, minimal scarring."
        />
        <meta name="twitter:image" content="https://udhay-zeta.vercel.app/hero-image.png" />
        <meta name="twitter:site" content="@drudayravi" />
        <meta name="twitter:creator" content="@drudayravi" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Physician",
              name: "Dr. Uday Ravi",
              image: "https://udhay-zeta.vercel.app/hero-image.png",
              description: "Board-certified surgeon specializing in advanced laparoscopic, laser and robotic surgery with 15+ years of experience in Bangalore.",
              url: "https://udhay-zeta.vercel.app/",
              telephone: "+91-XXXXXXXXXX",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Your Clinic Address",
                addressLocality: "Bangalore",
                addressRegion: "Karnataka",
                postalCode: "560001",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 12.9716,
                longitude: 77.5946,
              },
              medicalSpecialty: [
                "Laparoscopic Surgery",
                "Laser Surgery",
                "Robotic Surgery",
                "General Surgery",
                "Proctology",
                "Vascular Surgery",
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Bangalore Medical College and Research Institute",
              },
              memberOf: {
                "@type": "Organization",
                name: "MS Ramaiah Hospital and Medical College",
              },
              hasCredential: ["MBBS", "MS - General Surgery", "Fellowship in Minimal Access Surgery"],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "500",
                bestRating: "5",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              name: "Dr. Uday Ravi Surgical Practice",
              url: "https://udhay-zeta.vercel.app/",
              logo: "https://udhay-zeta.vercel.app/Logo.svg",
              image: "https://udhay-zeta.vercel.app/hero-image.png",
              description:
                "Advanced surgical care specializing in minimally invasive laparoscopic, laser and robotic procedures in Bangalore.",
              telephone: "+91-XXXXXXXXXX",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Your Clinic Address",
                addressLocality: "Bangalore",
                addressRegion: "Karnataka",
                postalCode: "560001",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 12.9716,
                longitude: 77.5946,
              },
              openingHours: ["Mo-Sa 09:00-18:00"],
              priceRange: "$$",
              paymentAccepted: "Cash, Credit Card, Insurance",
              medicalSpecialty: [
                "Laparoscopic Surgery",
                "Laser Surgery",
                "Robotic Surgery",
                "Hernia Repair",
                "Gallbladder Surgery",
                "Proctology",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter?.variable || ''} ${dmSerif?.variable || ''} ${radioCanadaBig?.variable || ''}`}>
        <BootstrapClient />
        {children}
        <Cta/>
      </body>
    </html>
  );
}
