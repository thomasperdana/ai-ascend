import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans'; // Corrected import using geist package
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; // Added Toaster

const geistSans = GeistSans; // Use the imported font object directly

// Removed Geist_Mono as it's not explicitly requested for body text.
// If needed for specific parts like code blocks, it can be applied locally.

export const metadata: Metadata = {
  title: 'AI Ascend - Elevate Your Marketing',
  description: 'Unlock unparalleled growth with our suite of intelligent SaaS solutions: Website AI, Voice AI, SMS AI, and Reputation AI.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} scroll-smooth`}>
      <body className={`font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
