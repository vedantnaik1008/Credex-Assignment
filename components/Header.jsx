'use client';
import useScroll from '@/hook/useScroll';
import Nav from './Nav';
import { useState } from 'react';
import MobileNav from './MobileNav';
import GoTopBtn from './GoTopBtn';

const Header = () => {
    const { ref, isVisible, handleClick } = useScroll();
    const [show, setShow] = useState(false);

    return (
        <>
            <header
                className='select-none py-4 md:py-2 px-8 fixed left-[5%] backdrop-blur-3xl z-50 !bg-white w-[90%] mt-5 rounded-[30px] border-black border-2'
                ref={ref}
                id='navbar'>
                <div className='flex justify-between items-center'>
                    <a href='#' className=''>
                        <h1 className='text-black font-bold font-cursi'>
                            Soft.Sell
                        </h1>
                    </a>
                    <Nav show={show} setShow={setShow} />
                </div>
                {show && <MobileNav show={show} setShow={setShow} />}
            </header>
            {isVisible && <GoTopBtn handleClick={handleClick} />}
        </>
    );
};

export default Header;
