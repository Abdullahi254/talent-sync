import React from 'react'
import { FaRobot } from "react-icons/fa";
import { MdOutlineStarPurple500 } from "react-icons/md";
import dp6 from "../../../public/ani-6.jpg";
import dp1 from "../../../public/ani-1.jpg";
import dp2 from "../../../public/ani-2.jpg";
import dp3 from "../../../public/ani-3.jpg";
import Image from "next/image";
import VideoBox from './VideoBox';
type Props = {}

const PageOne = (props: Props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 px-10 py-4">
            {/* first grid */}
            <div className='flex flex-col space-y-8 px-4'>
                {/* title heading */}
                <h1 className='font-bold text-2xl md:text-4xl tracking-wider'>
                    Uniting the World, One video call at a time
                </h1>
                {/* light text */}
                <p className='text-gray-500 md:text-lg'>
                    Experience the future of communication with ClearLink -
                    where crystal-clear video conferencing meets unparalleled simplicity.
                </p>
                {/* butttons */}
                <div className='flex space-x-2 items-center'>
                    <button className="bg-blue-700 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded-full text-xs md:text-sm">
                        Start your free trial
                    </button>
                    <div className='flex items-center'>
                        <FaRobot className='text-blue-600 hidden md:inline-block' />
                        <button className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-2 px-4 rounded-full text-xs md:text-sm">
                            Discover AI assistant
                        </button>
                    </div>
                </div>
                {/* avatars and star ratings */}
                <div className='flex space-x-4 flex-wrap'>
                    <div className='flex'>
                        <Image className="w-10 h-10 rounded-full -mx-2" src={dp6} alt="Rounded avatar" />
                        <Image className="w-10 h-10 rounded-full -mx-2" src={dp1} alt="Rounded avatar" />
                        <Image className="w-10 h-10 rounded-full -mx-2" src={dp2} alt="Rounded avatar" />
                        <Image className="w-10 h-10 rounded-full -mx-2" src={dp3} alt="Rounded avatar" />
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <div className='flex space-x-2 items-center'>
                            <MdOutlineStarPurple500 className='text-yellow-400 text-sm' />
                            <MdOutlineStarPurple500 className='text-yellow-400 text-sm' />
                            <MdOutlineStarPurple500 className='text-yellow-400 text-sm' />
                            <MdOutlineStarPurple500 className='text-yellow-400 text-sm' />
                            <MdOutlineStarPurple500 className='text-yellow-400 text-sm' />
                            <span className='text-sm font-semibold'>5.0</span>
                        </div>
                        <p className='text-sm text-gray-700'>
                            from 3,000+ reviews
                        </p>
                    </div>
                </div>
            </div>
            {/* second grid */}
            <VideoBox/>
        </div>

    )
}

export default PageOne
