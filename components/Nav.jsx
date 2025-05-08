'use client';
import { Link } from 'react-scroll';
import MenuSvg from './MenuSvg';

const Navbar = ({ show, setShow }) => {
    return (
        <nav className=''>
            <div className='hidden 950:block  mx-auto'>
                <div className='md:flex md:items-center md:justify-center md:gap-8 md:h-16'>
                    <Link
                        href='home'
                        to='home'
                        activeClass='active-on'
                        smooth={true}
                        spy={true}
                        offset={-110}
                        className='cursor-pointer active text-black dark:text-white'>
                        Home
                    </Link>
                    <Link
                        href='hiw'
                        to='hiw'
                        activeClass='active-on'
                        smooth={true}
                        spy={true}
                        offset={-50}
                        className='cursor-pointer active text-black dark:text-white'>
                        How It Works
                    </Link>
                    <Link
                        href='wcu'
                        to='wcu'
                        activeClass='active-on'
                        smooth={true}
                        spy={true}
                        offset={-100}
                        className='cursor-pointer active text-black dark:text-white'>
                        Why Choose Us
                    </Link>
                    <Link
                        href='testimonials'
                        to='testimonials'
                        activeClass='active-on'
                        smooth={true}
                        spy={true}
                        className='cursor-pointer  active text-black dark:text-white'>
                        Testimonials
                    </Link>
                    <Link
                        href='contact'
                        to='contact'
                        smooth={true}
                        spy={true}
                        offset={-50}
                        className='cursor-pointer  active text-black dark:text-white'>
                        Contact
                    </Link>
                </div>
            </div>
            <div
                className='flex flex-col gap-1 950:hidden absolute top-[26px] md:top-[20px] right-5  '
                onClick={() => setShow(!show)}>
                <MenuSvg show={show} />
            </div>
        </nav>
    );
};

export default Navbar;
