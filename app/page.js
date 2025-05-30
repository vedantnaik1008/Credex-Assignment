import ContactForm from '@/components/ContactForm';
import Crisp from '@/components/Crisp';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function Home() {
    return (
        <main className='bg-zinc-50 text-slate-950 dark:bg-zinc-900 overflow-hidden'>
            <Header />
            <Hero />
            <HowItWorks />
            <WhyChooseUs />
            <Testimonials />
            <ContactForm />
            <Crisp />
        </main>
    );
}
