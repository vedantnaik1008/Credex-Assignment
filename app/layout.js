import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Crisp from '@/components/Crisp';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin']
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin']
});

export const metadata = {
    title: 'SoftSell – Resell Software Easily',
    description:
        'SoftSell helps you resell unused software licenses effortlessly.',
    openGraph: {
        title: 'SoftSell – Resell Software Easily',
        description:
            'SoftSell helps you resell unused software licenses effortlessly.',
        url: 'https://credex-assignment-swart.vercel.app', // Replace with your actual domain
        type: 'website',
        images: [
            {
                url: '/public/download (1).png', // Replace with your actual OG image path
                width: 1200,
                height: 630,
                alt: 'SoftSell Preview'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'SoftSell – Resell Software Easily',
        description:
            'SoftSell helps you resell unused software licenses effortlessly.',
        images: ['/public/download (1).png'] // Replace with your actual OG image path
    },
    icons: {
        icon: '/favicon.ico' // Favicon path
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                {children}
                <Crisp />
            </body>
        </html>
    );
}
