import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import ThemeToggle from '../components/ThemeToggle';

const Navbar = () => {
    const location = useLocation();

    return (
        <div>
            <nav className='fixed z-20 bg-gray-100 w-full dark:bg-gray-700'>
                <div className='w-full'>
                    <div className='flex items-center h-20 w-full '>
                        <div className='flex items-center sm:mx-10 md:mx-10 justify-between w-full'>
                            <div className='flex justify-center items-center flex-shrink-0 '>
                                <h1 className=' font-bold text-xl cursor-pointer'>
                                    <Link to='/'>
                                        <span className='text-2xl pl-8 sm:pl-0 dark:text-white'>
                                            Cary<span className='text-blue-500'>Shu</span>
                                        </span>
                                    </Link>
                                </h1>
                            </div>
                            <div className='hidden md:block dark:text-white'>
                                <div className='flex items-baseline space-x-10'>
                                    <h1
                                        className={
                                            location.pathname === '/'
                                                ? 'text-blue-500'
                                                : 'cursor-pointer hover:text-blue-500'
                                        }
                                    >
                                        <Link to='/'>
                                            Home
                                        </Link>
                                    </h1>
                                    <h1
                                        className={
                                            location.pathname === '/about'
                                                ? 'text-blue-500'
                                                : 'cursor-pointer hover:text-blue-500'
                                        }
                                    >
                                        <Link to='/about'>
                                            About
                                        </Link>
                                    </h1>
                                    <h1
                                        className={
                                            location.pathname === '/projects'
                                                ? 'text-blue-500'
                                                : 'cursor-pointer hover:text-blue-500'
                                        }
                                    >
                                        <Link to='/projects'>
                                            Projects
                                        </Link>
                                    </h1>
                                    {/* <h1
                                        className={
                                            location.pathname === '/test'
                                                ? 'text-blue-500'
                                                : 'cursor-pointer hover:text-blue-500'
                                        }
                                    >
                                        <Link to='/test'>
                                            test
                                        </Link>
                                    </h1> */}
                                </div>
                            </div>

                            <div className='flex justify-center items-center flex-shrink-0 md:block'>
                                <div className='flex space-x-4'>
                                    <div>
                                        <a href='https://github.com/csh20000' target='_blank' rel='noopener noreferrer'>
                                            <BsGithub className='hidden md:block dark:invert' size='2rem' />
                                        </a>
                                    </div>
                                    <div>
                                        <a href='https://www.linkedin.com/in/cary-shu-b62295202/'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            <BsLinkedin className='hidden md:block dark:invert' size='2rem' />
                                        </a>
                                    </div>
                                    <div>
                                        <ThemeToggle />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
