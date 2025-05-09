import './globals.css';
import { ThemeProvider } from '@/components/context/ThemeContext';


export const metadata = {
    title: 'SoftSell – Resell Software Easily',
    description:
        'SoftSell helps you resell unused software licenses effortlessly.',
    openGraph: {
        title: 'SoftSell – Resell Software Easily',
        description:
            'SoftSell helps you resell unused software licenses effortlessly.',
        url: 'https://credex-assignment-swart.vercel.app',
        type: 'website',
        images: [
            {
                url: '/public/download (1).png',
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
        images: ['/public/download (1).png'] 
    },
    icons: {
        icon: '/favicon.ico'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body
                className={`antialiased`}>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
