'use client';
import Nav from './Nav';
import { useState } from 'react';
import MobileNav from './MobileNav';
import ThemeToggle from './ThemeToggle';

const Header = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <header
                className='select-none py-4 md:py-2 px-8 fixed left-[5%] backdrop-blur-3xl z-50 !bg-white dark:!bg-transparent w-[90%] mt-5 rounded-[30px] shadow-[0_-3px_0_black] border-black border-1 dark:border-[#808080] dark:shadow-[0_-3px_0_gray]'
                id='navbar'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-4 items-center justify-center'>
                        <a href='#' className=''>
                            <h1 className='text-black dark:text-white font-bold font-cursi'>
                                Soft.Sell
                            </h1>
                        </a>
                        <ThemeToggle />
                    </div>
                    <Nav show={show} setShow={setShow} />
                </div>
                {show && <MobileNav show={show} setShow={setShow} />}
            </header>
        </>
    );
};

export default Header;
