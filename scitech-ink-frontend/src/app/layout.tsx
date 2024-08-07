import { Metadata } from 'next';
import './globals.css'; 

export const metadata: Metadata = {
  title: 'SciTech Ink',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">{children}</body>
    </html>
  );
}