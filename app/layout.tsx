import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'NicheNet - Connect, Collaborate, and Create AI Startups',
  description: 'A web app for students to connect in niche academic/career communities, collaborate on projects, and build AI startups.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
