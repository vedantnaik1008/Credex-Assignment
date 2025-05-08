'use client';
import { Upload, DollarSign, CheckCircle } from 'lucide-react';
import { GlowingStarsBackgroundCard, GlowingStarsDescription, GlowingStarsTitle } from './ui/glowing-stars';
import React from 'react';

const steps = [
    {
        icon: <Upload className='h-8 w-8 text-blue-600' />,
        number: '1',
        title: 'Upload License',
        description: 'Submit your spare software license using our secure form.'
    },
    {
        icon: <DollarSign className='h-8 w-8 text-blue-600' />,
        number: '2',
        title: 'Get Valuation',
        description:
            'Receive a competitive offer based on real-time market value.'
    },
    {
        icon: <CheckCircle className='h-8 w-8 text-blue-600' />,
        number: '3',
        title: 'Get Paid',
        description: 'Accept the offer and get paid instantly—no waiting.'
    }
];

<div className='flex py-20 items-center justify-center antialiased'></div>;

export default function HowItWorks() {
    return (
        <section id='hiw' className='section bg-white dark:bg-zinc-900'>
            <div className='container mx-auto px-4 text-center'>
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-zinc-900 dark:text-white'>
                    How It Works
                </h2>
                <div className='flex flex-wrap gap-8 justify-center items-center'>
                    {steps.map((step, index) => (
                        <React.Fragment key={index}>
                            <GlowingStarsBackgroundCard>
                                <span className='hidden 500:block font-extrabold 500:text-[200px] opacity-50 text-white absolute 500:-right-36 500:top-[85px]'>
                                    {step.number}
                                </span>
                                <div className='mb-4'>{step.icon}</div>
                                <p className='500:hidden text-left mb-2 font-bold text-white'>step 0{step.number}</p>
                                <GlowingStarsTitle className={'text-left mb-2'}>
                                    {step.title}
                                </GlowingStarsTitle>
                                <div className='flex justify-between items-end'>
                                    <GlowingStarsDescription
                                        className={'text-left'}>
                                        {step.description}
                                    </GlowingStarsDescription>
                                </div>
                            </GlowingStarsBackgroundCard>
                        </React.Fragment>
                    ))}
                </div>
                {/* <div className='flex flex-wrap gap-10 justify-center items-center'>
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className='bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl flex flex-col  justify-center'>
                            <div className='mb-2'>{step.icon}</div>
                            <h3 className='text-left text-xl font-semibold mb-2 text-zinc-800 dark:text-white'>
                                {step.title}
                            </h3>
                            <p className='text-left max-w-[300px] text-zinc-600 dark:text-zinc-300'>
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div> */}
            </div>
        </section>
    );
}
