import type { Metadata } from "next";
import { Outfit, Geist_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { Toaster } from "sonner";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Cindera — Intelligent Patient Communication for Hospitals",
    template: "%s · Cindera",
  },
  description:
    "Cindera replaces the undifferentiated call light with mobile-first request routing. Patients categorize what they need, the system routes it to the right staff — RN, CNA, housekeeping, or dietary — in under four minutes. No hardware. No IT project. Live in weeks.",
  keywords: [
    "patient communication",
    "nurse call system",
    "hospital technology",
    "HCAHPS",
    "patient request routing",
    "BYOD hospital",
    "nurse call button alternative",
    "patient experience",
    "healthcare SaaS",
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={cn("h-full", "antialiased", geistMono.variable, "font-sans", geist.variable)}>
      <body className={`${outfit.className} min-h-full  flex flex-col bg-[#ffffff]`}>
        <SmoothScroll>{children}</SmoothScroll>
        <Toaster richColors position="bottom-right" />
      </body>
    </html>
  );
}
