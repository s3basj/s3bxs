import type { Metadata, Viewport } from "next";
import { Inter, Permanent_Marker, Silkscreen } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const marker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-permanent-marker",
});

const pixel = Silkscreen({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-silkscreen",
});

export const metadata: Metadata = {
  title: "Sebastián Jaramillo | Desarrollador Full Stack",
  description: "Sebastián Jaramillo - Ingeniero Civil, Diseñador UX/IX y Desarrollador Full Stack. Portafolio en construcción.",
  keywords: ["Sebastián Jaramillo", "Full Stack Developer", "UX Designer", "Web Developer", "Civil Engineer", "Colombia"],
  authors: [{ name: "Sebastián Jaramillo" }],
  creator: "Sebastián Jaramillo",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://s3bxs.com",
    title: "Sebastián Jaramillo | Desarrollador Full Stack",
    description: "Ingeniero Civil, Diseñador UX/IX y Desarrollador Full Stack",
    siteName: "Sebastián Jaramillo Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sebastián Jaramillo | Desarrollador Full Stack",
    description: "Ingeniero Civil, Diseñador UX/IX y Desarrollador Full Stack",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#f2f2f3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${marker.variable} ${pixel.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}