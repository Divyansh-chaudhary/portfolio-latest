import type { Metadata } from "next";
import { Space_Grotesk, Source_Sans_3, IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { getExperienceLabel } from "@/lib/experience";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const years = getExperienceLabel();

export const metadata: Metadata = {
  title: "Divyansh Chaudhary · Frontend Software Engineer",
  description: `Frontend Software Engineer with ${years} years of experience in React, Vue, TypeScript, and micro-frontends. Based in Gurugram.`,
  openGraph: {
    title: "Divyansh Chaudhary · Frontend Software Engineer",
    description: `Frontend Software Engineer with ${years} years of experience specializing in React, Vue, TypeScript, and micro-frontend architecture.`,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable} ${mono.variable} h-full`}
    >
      <body className="min-h-full antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
