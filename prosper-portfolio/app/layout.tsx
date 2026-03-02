import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from 'sonner';
import { Providers } from "../components/providers";
import ClientWrapper from "../components/ClientWrapper"; // We will create this next

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prosper Obeng-Gyan | Portfolio",
  description: "UI/UX, Full-Stack, Data Analysis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-slate-950 transition-colors duration-500`}>
        <Providers>
          {/* This wrapper handles Particles, Theme Toggles, and Page Fades */}
          <ClientWrapper>{children}</ClientWrapper>
          <Toaster richColors position="top-right" />
        </Providers>
      </body>
    </html>
  );
}