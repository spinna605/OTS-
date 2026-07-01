import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 30, // 30 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export const metadata = {
  title: "Office Tech Solutions - IT & Printer Services Zimbabwe | Harare",
  description:
    "Professional IT and printer services in Zimbabwe. 15+ years experience in printer repairs, network setup, remote support. Serving Canon, HP, Ricoh, Kyocera, Nashua, Gestetner.",
  keywords:
    "printer maintenance Zimbabwe, IT support Harare, network setup Zimbabwe, Office Tech Solutions, printer repairs, Canon HP Ricoh service, remote IT support Zimbabwe",
  authors: [{ name: "Office Tech Solutions" }],
  creator: "Office Tech Solutions",
  publisher: "Office Tech Solutions",
  robots: "index, follow",
  openGraph: {
    title:
      "Office Tech Solutions - Professional IT & Printer Services Zimbabwe",
    description:
      "Expert IT and printer services for businesses in Zimbabwe. 15+ years experience with all major brands. 24/7 support available.",
    url: "https://prodigitalventures.infy.uk",
    siteName: "Office Tech Solutions",
    locale: "en_ZW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Office Tech Solutions - IT & Printer Services Zimbabwe",
    description:
      "Professional IT and printer services in Zimbabwe. Expert repairs, network setup, and 24/7 support.",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0a2e2e",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="your-google-verification-code"
        />
        <link rel="canonical" href="https://prodigitalventures.infy.uk" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Office Tech Solutions",
              description:
                "Professional IT and printer services for businesses in Zimbabwe",
              url: "https://prodigitalventures.infy.uk",
              telephone: "+263715689056",
              email: "ifixofficequip@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Harare",
                addressCountry: "Zimbabwe",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -17.8292,
                longitude: 31.0522,
              },
              openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-16:00"],
              serviceArea: {
                "@type": "Country",
                name: "Zimbabwe",
              },
              priceRange: "$$",
              founder: {
                "@type": "Person",
                name: "Sinclair Karim",
              },
              foundingDate: "2009",
              slogan: "Keeping Your Office Running Smoothly",
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
