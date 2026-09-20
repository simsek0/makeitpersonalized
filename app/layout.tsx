import type { Metadata } from 'next';
import { Geist, Geist_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';
import './futuristic.css';
const geist = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const mono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });
const display = Space_Grotesk({ variable: '--font-space-grotesk', subsets: ['latin'] });
export const metadata: Metadata = { title: 'Make it Personalized | Custom Apparel, Gifts & Engraving', description: 'Make something personal. Custom printing, embroidery, engraving and drinkware in Happy Valley, Oregon. Start a custom order request.', robots: { index: false, follow: false } };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body className={[geist.variable, mono.variable, display.variable].join(" ")}><a className="skip-link" href="#main">Skip to content</a><div id="main">{children}</div></body></html>; }