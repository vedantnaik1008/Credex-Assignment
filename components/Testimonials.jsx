'use client';

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function Testimonials() {
    const testimonials = [
        {
            name: 'Ananya Sharma',
            title: 'Freelance Developer',
            company: 'TechNest',
            quote: 'SoftSell made it incredibly easy to offload my unused software. The payout was instant and fair. Highly recommended!'
        },
        {
            name: 'Rahul Mehta',
            title: 'IT Manager',
            company: 'InnoWare Solutions',
            quote: 'We sold over 20 licenses through SoftSell. The platform is smooth, transparent, and saved us time and money.'
        },
        {
            name: 'Priya Nair',
            title: 'Product Designer',
            company: 'UIForge',
            quote: 'I loved how intuitive the process was. In just a few clicks, I sold an old design tool license I no longer needed.'
        },
        {
            name: 'Kunal Desai',
            title: 'CTO',
            company: 'CloudCrate',
            quote: 'We regularly use SoftSell to recover costs on unused tools. It’s become part of our asset management workflow.'
        },
        {
            name: 'Meera Iyer',
            title: 'Founder',
            company: 'EduTechly',
            quote: 'Selling software licenses through SoftSell is so much better than letting them go to waste. Great support too!'
        }
    ];


    return (
        <section
            id='testimonials'
            className='h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden section'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-zinc-900 dark:text-white text-center'>
                Testimonials
            </h2>
            <InfiniteMovingCards
                items={testimonials}
                direction='right'
                speed='normal'
            />
        </section>
    );
}
