"use client"
// RootLayout.tsx
import React, { useState, useEffect } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Loading from '../components/ui/loading'; // Adjust the path based on your file structure

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
      }, 1000); // Adjust the timeout as needed
    };

    // Add additional event listeners or async operations as needed
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        {loading ? <Loading /> : children}
      </body>
    </html>
  );
}
