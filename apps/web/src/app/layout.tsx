import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VichaarIQ',
  description: 'Ask your business data questions in plain English.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
