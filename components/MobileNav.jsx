import React from 'react';
import { Link } from 'react-scroll';
import { NavLinks } from '@/data/NavLinks';

const MobileNav = ({ show, setShow }) => {
    const handleClickNav = () => {
        setShow(false);
    };

    return (
        <div className={show ? ' p-4' : 'px-2 sm:px-6  md:hidden'}>
            <div
                className='flex flex-col items-center sm:items-center justify-center gap-6 p-1'
                onClick={() => setShow(!show)}>
                {NavLinks.nav.map((res) => (
                    <Link
                        onClick={handleClickNav}
                        key={res.href}
                        href={res.href}
                        to={res.to}
                        smooth={res.smooth}
                        spy={res.spy}
                        offset={res.offset}
                        className='cursor-pointer active text-black'>
                        {res.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MobileNav;
