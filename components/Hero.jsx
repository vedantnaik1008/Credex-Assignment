'use client';
import { animationProps } from '../variants';
import { Link } from 'react-scroll';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { AuroraBackground } from './ui/aurora-background';
// import { Button } from './ui/moving-border';

const Hero = () => {
    return (
        <AuroraBackground>
            <section
                className='min-h-[85vh] flex items-center mt-28 container-1 relative'
                id='home'>
                <div className='container mx-auto'>
                    <div className='flex flex-col justify-center items-center gap-y-8 lg:gap-x-12'>
                        <div {...animationProps} className=''>
                            {/* <Image
                            priority={true}
                            placeholder='blur'
                            width={400}
                            height={400}
                            sizes='(min-width: 640px) 400px, (min-width: 380px) 290px, calc(33.33vw + 170px)'
                            src={Images}
                            alt='person-img'
                            className='rounded-xl bg-cover hidden md:block'
                        /> */}
                        </div>
                        <div className=' font-secondary'>
                            <h1
                                {...animationProps}
                                className='text-3xl md:text-6xl  text-center lg:max-w-[900px]  text-black font-medium my-4 lg:text-[80px]'>
                                <TextGenerateEffect
                                    words={'Sell Unused Licenses for Cash'}
                                />
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
                                    {/* <Button
                                        borderRadius='rounded-full'
                                        className='bg-[#000000] text-white dark:bg-white dark:text-black border-black dark:border-white'>
                                        {' '}
                                    </Button> */}
                                    <button className='btn-tweet hover:scale-105 bg-[#000000] shadow-[inset_0_-4px_0_0_rgba(0,0,0,1)] !text-white  btn-lg  transition-all duration-300 ease-out'>
                                        Get a Quote
                                    </button>
                                </Link>
                                <a
                                    href='#'
                                    className='py-4 rounded-full text-black font-semibold hover:scale-105 shadow-[inset_0_-4px_0_0_rgba(0,0,0,1)]  btn-lg  transition-all duration-300 ease-out border-2 border-black'>
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
