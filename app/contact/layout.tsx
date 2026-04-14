import type { Metadata, ReactNode } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us - JCI Connect',
  description: 'Get in touch with JCI Connect support team',
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

