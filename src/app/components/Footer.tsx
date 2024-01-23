import Image from 'next/image'
import React from 'react'
import logo from "../../../public/logo.png"
import apple from "../../../public/Mobile app store badge.png"
import google from "../../../public/Mobile app store badge (1).png"
import { IoLogoLinkedin, IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoYoutube  } from "react-icons/io";
type Props = {}

function Footer({ }: Props) {
    return (
        <div className='w-full lg:px-10 py-4'>
            {/* first footer*/}
            <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
                <div className='col-span-1 w-full flex flex-col space-y-4'>
                    <div className='w-full space-x-1 flex items-center'>
                        <Image src={logo} width={50} alt='logo icon' priority />
                        <h1 className='font-bold lg:text-lg'>ClearLink.</h1>
                    </div>
                    <p className='text-gray-500 text-sm md:text-base pl-2'>
                        ClearLink is your gateway to effortless, high-quality video conferencing. Join us in shaping the future of communication!
                    </p>
                </div>
                <div className='w-full col-span-auto grid grid-cols-4 gap-6'>
                    <p className='text-xs md:text-sm text-gray-500 hover:text-gray-900'>Product</p>
                    <p className='text-xs md:text-sm text-gray-500 hover:text-gray-900'>Company</p>
                    <p className='text-xs md:text-sm text-gray-500 hover:text-gray-900 '>Resources</p>
                    <p className='text-xs md:text-sm text-gray-500 hover:text-gray-900'>Legal</p>
                    <p className='text-xs md:text-sm text-gray-500 hover:text-gray-900 cursor-pointer font-semibold'>Overview</p>
                    <p className='text-xs md:text-sm text-gray-500 hover:text-gray-900 cursor-pointer font-semibold'>About us</p>
                    <p className='text-xs md:text-sm text-gray-500 hover:text-gray-900 cursor-pointer font-semibold'>Blog</p>
                    <p className='text-xs md:text-sm text-gray-500 hover:text-gray-900 cursor-pointer font-semibold'>Terms</p>
                    <p className='text-xs md:text-sm text-gray-500 hover:text-gray-900 cursor-pointer font-semibold'>Features</p>
                    <p className='text-xs md:text-sm text-gray-500 hover:text-gray-900 cursor-pointer font-semibold'>Careers</p>
                    <p className='text-xs md:text-sm text-gray-500 hover:text-gray-900 cursor-pointer font-semibold'>Events</p>
                    <p className='text-xs md:text-sm text-gray-500 hover:text-gray-900 cursor-pointer font-semibold'>Privacy</p>
                    <p className='text-xs md:text-sm text-gray-500 hover:text-gray-900 cursor-pointer font-semibold'>Solutions</p>
                    <p className='text-xs md:text-sm text-gray-500 hover:text-gray-900 cursor-pointer font-semibold'>Press</p>
                    <p className='text-xs md:text-sm text-gray-500 hover:text-gray-900 cursor-pointer font-semibold'>Help center</p>
                    <p className='text-xs md:text-sm text-gray-500 hover:text-gray-900 cursor-pointer font-semibold'>Cookies</p>
                    <p className='text-xs md:text-sm text-gray-500 hover:text-gray-900 cursor-pointer font-semibold'>Tutorials</p>
                    <p className='text-xs md:text-sm text-gray-500 hover:text-gray-900 cursor-pointer font-semibold'>News</p>
                    <p className='text-xs md:text-sm text-gray-500 hover:text-gray-900 cursor-pointer font-semibold'>Tutorials</p>
                    <p className='text-xs md:text-sm text-gray-500 hover:text-gray-900 cursor-pointer font-semibold'>Licenses</p>
                    <p className='text-xs md:text-sm text-gray-500 hover:text-gray-900 cursor-pointer font-semibold'>Pricing</p>
                    <p className='text-xs md:text-sm text-gray-500 hover:text-gray-900 cursor-pointer font-semibold'>Contact</p>
                    <p className='text-xs md:text-sm text-gray-500 hover:text-gray-900 cursor-pointer font-semibold'>Support</p>
                    <p className='text-xs md:text-sm text-gray-500 hover:text-gray-900 cursor-pointer font-semibold'>Contact</p>
                </div>
                <div className='w-full col-span-1 flex flex-col space-y-3'>
                    <h4 className='text-blue-700 font-bold text-sm'>Get the app</h4>
                    <Image src={apple} alt='logo icon' priority className='cursor-pointer' />
                    <Image src={google} alt='logo icon' priority className='cursor-pointer' />
                </div>
            </div>
            {/* second footer */}
            <div className='w-full bg-gray-50 flex flex-wrap space-y-1 justify-between px-6 py-8'>
                <p className='text-gray-500 text-xs'>© 2023 ClearLink. All rights reserved.</p>
                <div className='flex items-center space-x-2'>
                    <IoLogoLinkedin className='text-gray-500'/>
                    <IoLogoTwitter className='text-gray-500'/>
                    <IoLogoInstagram className='text-gray-500'/>
                    <IoLogoGithub className='text-gray-500'/>
                    <IoLogoYoutube className='text-gray-500'/>
                </div>
            </div>
        </div>
    )
}

export default Footer