import type { Metadata } from 'next';
import {siteUrl} from '@/lib/seo';
import { Geist } from 'next/font/google';
import './globals.css';
import './futuristic.css';
import './shop.css';
import './order.css';
import './home-shop.css';
import PageMotion from '@/components/page-motion';
const geist = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
export const metadata: Metadata = { metadataBase:new URL(siteUrl), title: 'Make it Personalized | Custom Apparel, Gifts & Engraving', description: 'Make something personal. Custom printing, embroidery, engraving and drinkware in Happy Valley, Oregon. Start a custom order request.', robots: { index: true, follow: true } };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body className={geist.variable}><a className="skip-link" href="#main">Skip to content</a><div id="main">{children}</div><PageMotion/></body></html>; }