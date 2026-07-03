import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Our World - A Journey Through Memories',
  description: 'Explore our collection of cherished memories and adventures from around the globe',
  keywords: ['travel', 'memories', 'globe', 'adventures', 'journey'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-primary text-light">
        {children}
      </body>
    </html>
  );
}
