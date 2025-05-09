'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const LazyCrisp = dynamic(() => import('@/components/LazyCrisp'), {
    ssr: false,
    loading: () => null
});

export default function Crisp() {
    const [loadCrisp, setLoadCrisp] = useState(false);

    return (
        <>
            {!loadCrisp ? (
                <button
                    onClick={() => setLoadCrisp(true)}
                    className='fixed z-[1000] bottom-6 right-6 bg-black text-white px-4 py-2 rounded-full shadow-lg'>
                    Chat with Us
                </button>
            ) : (
                <LazyCrisp />
            )}
        </>
    );
}
