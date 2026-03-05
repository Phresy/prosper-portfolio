"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  // We create a "safe" version of the provider that doesn't check types
  const SafeProvider = NextThemesProvider as any;

  return (
    <SafeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={true}
      storageKey="portfolio-theme"
    >
      {children}
    </SafeProvider>
  );
}