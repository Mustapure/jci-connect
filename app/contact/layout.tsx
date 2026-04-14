import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - JCI Connect',
  description: 'Get in touch with JCI Connect support team',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

