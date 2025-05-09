'use client';

import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { cn } from '@/utils/cn';

export const GlowingStarsBackgroundCard = ({ className, children }) => {
    const [mouseEnter, setMouseEnter] = useState(false);

    return (
        <div
            onMouseEnter={() => {
                setMouseEnter(true);
            }}
            onMouseLeave={() => {
                setMouseEnter(false);
            }}
            className={cn(
                'bg-[linear-gradient(110deg,#333_0.6%,#222)] p-4 max-w-md max-h-[20rem] h-full w-full rounded-xl border border-[#eaeaea] dark:border-neutral-600 relative',
                className
            )}>
            <div className='flex justify-center items-center'>
                <Illustration mouseEnter={mouseEnter} />
            </div>
            <div className='px-2 py-10  absolute top-[0%] z-10'>{children}</div>
        </div>
    );
};

export const GlowingStarsDescription = ({ className, children }) => {
    return (
        <p className={cn('text-base text-white max-w-[16rem]', className)}>
            {children}
        </p>
    );
};

export const GlowingStarsTitle = ({ className, children }) => {
    return (
        <h2 className={cn('font-bold text-2xl text-[#eaeaea]', className)}>
            {children}
        </h2>
    );
};

export const Illustration = ({ mouseEnter }) => {
    const stars = 108;
    const columns = 18;

    const [glowingStars, setGlowingStars] = useState([]);

    const highlightedStars = useRef([]);

    useEffect(() => {
        const interval = setInterval(() => {
            highlightedStars.current = Array.from({ length: 5 }, () =>
                Math.floor(Math.random() * stars)
            );
            setGlowingStars([...highlightedStars.current]);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className='h-48 p-1 w-full'
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gap: `1px`
            }}>
            {[...Array(stars)].map((_, starIdx) => {
                const isGlowing = glowingStars.includes(starIdx);
                const delay = (starIdx % 10) * 0.1;
                return (
                    <div
                        key={`matrix-col-${starIdx}}`}
                        className='relative flex items-center justify-center'>
                        <AnimatePresence mode='wait'>
                            {isGlowing && <Glow delay={delay} />}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
};

const Glow = ({ delay }) => {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            transition={{
                duration: 2,
                ease: 'easeInOut',
                delay: delay
            }}
            exit={{
                opacity: 0
            }}
            className='absolute  left-1/2 -translate-x-1/2 z-10 h-[4px] w-[4px] rounded-full bg-blue-500 blur-[1px] shadow-2xl shadow-blue-400'
        />
    );
};
