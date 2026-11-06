import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Sebastián Jaramillo | Full Stack Developer",
  description: "Sebastián Jaramillo - Civil Engineer, UX/IX Designer & Full Stack Developer. Portafolio en construcción.",
  keywords: ["Sebastián Jaramillo", "Full Stack Developer", "UX Designer", "Web Developer", "Civil Engineer", "Colombia"],
  authors: [{ name: "Sebastián Jaramillo" }],
  creator: "Sebastián Jaramillo",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://s3bxs.com",
    title: "Sebastián Jaramillo | Full Stack Developer",
    description: "Civil Engineer, UX/IX Designer & Full Stack Developer",
    siteName: "Sebastián Jaramillo Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sebastián Jaramillo | Full Stack Developer",
    description: "Civil Engineer, UX/IX Designer & Full Stack Developer",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0f18",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}