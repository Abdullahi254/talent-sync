import React from 'react'
import Image from "next/image";
import shopify from "../../../public/shopify.png";
import avator from "../../../public/Avatar.png"
import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import p1 from "../../../public/Image.png"
import p2 from "../../../public/Image (1).png"
import p3 from "../../../public/Image (2).png"
import p4 from "../../../public/Image (3).png"
import p5 from "../../../public/Image (4).png"
type Props = {}

const PageThree = (props: Props) => {
    return (
        // grid layout
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:px-10 mb-28 bg-gray-100 py-4'>
            {/* first grid content */}
            <div className='w-full flex flex-col space-y-4 items-start md:justify-evenly'>
                <Image height={100} width={120} className="h-auto w-auto" src={shopify} alt="shopify logo" />
                <div className='flex space-x-2 px-5'>
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                </div>
                <p className='md:text-lg lg:text-xl font-semibold px-5 py-2'>
                    ClearLink has upgraded our remote meetings. High-quality video, screen sharing, and top-notch security make it essential for our team.
                </p>
                <div className='w-full flex justify-between px-5'>
                    <div className='flex space-x-2'>
                        <Image src={avator} alt='avator icon' />
                        <div className='space-y-1'>
                            <h3 className='font-semibold text-xs md:text-sm'>Sarah Thompson</h3>
                            <h4 className='text-gray-500 text-xs md:text-sm'> Project Manager, Shopify</h4>
                        </div>
                    </div>
                    {/* arrows */}
                    <div className='flex space-x-4'>
                        <div className=' rounded-full bg-white p-5 cursor-pointer hover:bg-gray-50'>
                            <FaArrowRight className='rotate-180 text-blue-600 text-sm md:text-base' />
                        </div>

                        <div className=' rounded-full bg-white p-5 cursor-pointer hover:bg-gray-50'>
                            <FaArrowRight className='text-blue-600 text-sm md:text-base' />
                        </div>
                    </div>
                </div>
            </div>
            {/* second grid content */}
            <div className='w-full flex flex-wrap space-x-4 space-y-4 self-start'>
                <Image src={p1} alt='Image' className='self-start'/>
                <Image src={p2} alt='Image' className='self-start'/>
                <Image src={p3} alt='Image' className='self-start'/>
                <Image src={p4} alt='Image' className='self-start'/>
                <Image src={p5} alt='Image' className='self-start'/>
            </div>
        </div>
    )
}

export default PageThree