'use client';

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from "../../../public/logo.png"
import { MdArrowDropDown } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";

type Props = {}

const Navbar = (props: Props) => {

    const [sideNav, setSideNav] = useState<boolean>(false)

    const handleNav = () => {
        setSideNav(prev => !prev)
    }

    return (
        <>
            <nav className={` bg-gray-100 max-w-6xl mx-auto h-14 border-b-[1px] border-gray-200 px-8 rounded-full my-12`}>

                <div className='flex items-center h-full justify-between w-full'>
                    {/* logo  */}
                    <div className='cursor-pointer flex items-center'>
                        <Image src={logo} width={50} alt='logo icon' priority />
                        <h1 className='font-bold lg:text-lg'>ClearLink.</h1>
                    </div>

                    <div className=' hidden md:flex items-center space-x-8 '>
                        {/* Main Navigation links */}
                        <div className='flex items-center cursor-pointer'>
                            <span className={`text-sm text-gray-700 hover:underline `}>
                                Products
                            </span>
                            <MdArrowDropDown />
                        </div>

                        <div className='flex items-center cursor-pointer'>
                            <span className={`text-sm text-gray-700 hover:underline `}>
                                Solutions
                            </span>
                            <MdArrowDropDown />
                        </div>

                        <div className='flex items-center cursor-pointer'>
                            <span className={`text-sm text-gray-700 hover:underline `}>
                                Resources
                            </span>
                            <MdArrowDropDown />
                        </div>

                        <Link href="/pricing" className='md:hidden lg:inline-block'>
                            <span className={`text-sm text-gray-900 hover:underline`}>
                                Pricing
                            </span>
                        </Link>
                    </div>

                    <div className='hidden md:flex space-x-2'>
                        {/* button links */}
                        <button className="bg-white hover:bg-gray-200 text-gray-700 font-semibold  py-2 px-4 rounded-full text-sm">
                            Talk to sales
                        </button>
                        <button className="bg-blue-700 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded-full text-sm">
                            Sign up for free
                        </button>
                    </div>

                    {/* mobile menu icon */}
                    <div className='md:hidden cursor-pointer' onClick={handleNav}>
                        <CiMenuBurger className='font-bold' />
                    </div>
                </div>
            </nav>

            {/* side drawer below */}
            <div className={sideNav ? 'fixed left-0 top-0 w-full h-screen bg-black/70 md:hidden' : ''}>
                <div
                    className={sideNav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen overflow-y-auto bg-[#ecf0f3] p-10 ease-in duration-500 flex flex-col justify-between z-100 '
                        :
                        'fixed left-[-150%] top-0 ease-in duration-500'}
                >
                    <button className='absolute top-2 right-2 p-2 rounded-full bg-white' onClick={()=>setSideNav(false)}>
                        {/* close button */}
                        <IoIosClose className='text-2xl'/>
                    </button>

                    <div className='cursor-pointer flex items-center'>
                        {/* logo  */}
                        <Image src={logo} width={50} alt='logo icon' priority />
                        <h1 className='font-bold lg:text-lg'>ClearLink.</h1>
                    </div>

                    <div className='flex flex-col justify-center items-center space-y-8'>
                        {/* Main Navigation links */}
                        <div className='flex items-center cursor-pointer'>
                            <span className={`text-sm md:text-base text-gray-700 hover:underline `}>
                                Products
                            </span>
                            <MdArrowDropDown className='-rotate-90' />
                        </div>

                        <div className='flex items-center cursor-pointer'>
                            <span className={`text-sm md:text-base text-gray-700 hover:underline `}>
                                Solutions
                            </span>
                            <MdArrowDropDown className='-rotate-90' />
                        </div>

                        <div className='flex items-center cursor-pointer'>
                            <span className={`text-sm md:text-base text-gray-700 hover:underline `}>
                                Resources
                            </span>
                            <MdArrowDropDown className='-rotate-90' />
                        </div>

                        <Link href="/pricing">
                            <span className={`text-sm md:text-base text-gray-900 hover:underline`}>
                                Pricing
                            </span>
                        </Link>
                    </div>

                    <div className='flex flex-col justify-center space-y-8'>
                        {/* button links */}
                        <button className="bg-white hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-full text-sm">
                            Talk to sales
                        </button>
                        <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full text-sm">
                            Sign up for free
                        </button>
                    </div>

                </div>
            </div>

        </>

    )
}

export default Navbar