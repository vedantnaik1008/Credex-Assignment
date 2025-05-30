'use client';
import { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';
import { cn } from '@/utils/cn';

export const TextGenerateEffect = ({
    words,
    className
}) => {
    const [scope, animate] = useAnimate();
    let wordsArray = words.split(' ');
    useEffect(() => {
        animate(
            'span',
            {
                opacity: 1
            },
            {
                duration: 1,
                delay: stagger(0.1)
            }
        );
    }, [scope.current]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            className='dark:text-white opacity-0'>
                            {word}{' '}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div className={cn('', className)}>
            <div className=''>
                <div className=' dark:text-whiteleading-snug tracking-wide'>
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};
