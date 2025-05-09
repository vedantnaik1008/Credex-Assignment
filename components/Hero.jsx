'use client';
import { animationProps } from '../variants';
import { Link } from 'react-scroll';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { AuroraBackground } from './ui/aurora-background';

const Hero = () => {
    return (
        <AuroraBackground>
            <section
                className='min-h-[85vh] flex items-center mt-28 container-1 relative story'
                id='home'>
                <div className='container mx-auto'>
                    <div className='flex flex-col justify-center items-center gap-y-8 lg:gap-x-12'>
                        <div className='font-secondary'>
                            <h1 className='text-3xl md:text-6xl  text-center lg:max-w-[900px]  text-black dark:text-white font-medium my-4 lg:text-[80px]'>
                                Sell Unused Licenses for Cash
                            </h1>

                            <div className='w-[95%] text-sm md:text-lg mx-auto text-center my-4 md:my-8 max-w-3xl text-black font-light'>
                                <TextGenerateEffect
                                    words={
                                        'Easily sell your surplus software licenses in just a few clicks — get a fair valuation and quick payment with SoftSell.'
                                    }
                                />
                            </div>
                            <div
                                {...animationProps}
                                className='flex flex-wrap gap-3 md:gap-6  items-center justify-center mb-12 mx-auto'>
                                <Link
                                    href='#'
                                    to='#'
                                    smooth={true}
                                    spy={true}
                                    offset={3}>
                                    <button className='btn-tweet hover:scale-105 bg-[#000000] dark:bg-white dark:!text-black shadow-[inset_0_-4px_0_0_rgba(0,0,0,1)] !text-white  btn-lg  transition-all duration-300 ease-out'>
                                        Get a Quote
                                    </button>
                                </Link>
                                <a
                                    href='#'
                                    className='py-4 rounded-full dark:text-white dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)] text-black font-semibold hover:scale-105 dark:shadow-[none] shadow-[inset_0_-4px_0_0_rgba(0,0,0,1)]  btn-lg  transition-all duration-300 ease-out border-2 border-black'>
                                    Sell My Licenses
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AuroraBackground>
    );
};

export default Hero;
