"use client"
// RootLayout.tsx
import React, { useState, useEffect } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Loading from '../components/ui/loading';
import { ThemeProvider } from "@/components/theme-provider"
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // Simulate an asynchronous operation (e.g., fetching data)
      setTimeout(() => {
        setLoading(false);
      }, 100); // Adjust the timeout as needed
    };

    if (document.readyState === 'complete') {
      // If the document has already been loaded, run the handler immediately
      handleLoad();
    } else {
      // Otherwise, add an event listener for the 'load' event
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <html suppressHydrationWarning lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system" 
          enableSystem
          disableTransitionOnChange 
        >
        {loading ? <Loading /> : children}
        </ThemeProvider>
      </body>
    </html>
  );
}
