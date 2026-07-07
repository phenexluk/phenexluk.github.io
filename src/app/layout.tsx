import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono, Manrope } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://phenexluk.github.io"),
  title: "Phenex Luk — Mobile apps that ship.",
  description:
    "Lead Mobile Developer in Hong Kong with 10+ years building React Native, Flutter, iOS, and Android apps.",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }, { url: "/favicon.ico" }],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: "Phenex Luk",
    title: "Phenex Luk — Mobile apps that ship.",
    description:
      "Lead Mobile Developer in Hong Kong with 10+ years building React Native, Flutter, iOS, and Android apps.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Phenex Luk — PL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Phenex Luk — Mobile apps that ship.",
    description:
      "Lead Mobile Developer in Hong Kong with 10+ years building React Native, Flutter, iOS, and Android apps.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${jetbrains.variable} ${fraunces.variable} dark`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
