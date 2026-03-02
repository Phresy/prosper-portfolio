"use client";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider 
      attribute="class"        // adds “dark” class to <html>
      defaultTheme="dark"
      enableSystem={true}      // respect prefers‑color‑scheme
      storageKey="theme"
    >
      {children}
    </ThemeProvider>
  );
}