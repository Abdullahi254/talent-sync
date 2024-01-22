import React from 'react';
import Image from "next/image";
import dp1 from "../../../public/ani-1.jpg";
import dp2 from "../../../public/ani-2.jpg";
import dp3 from "../../../public/ani-3.jpg";
import dp4 from "../../../public/ani-4.jpg";
import dp5 from "../../../public/ani-5.jpg";
import dp6 from "../../../public/ani-6.jpg";
import { IoMicOutline, IoVideocamOutline } from "react-icons/io5";
import { CiMonitor, CiFaceSmile, CiSettings } from "react-icons/ci";
import { FaComment } from "react-icons/fa";


type Props = {}

const VideoBox = (props: Props) => {
  return (
    <div className="bg-blue-50 p-8 rounded-xl shadow-md">
      {/* animation avator grid */}
      <div className='grid grid-cols-3 gap-4 mb-6'>
        <Image className="w-16 h-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-2xl" src={dp1} alt="Rounded avatar" />
        <Image className="w-16 h-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-2xl" src={dp2} alt="Rounded avatar" />
        <Image className="w-16 h-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-2xl" src={dp3} alt="Rounded avatar" />
        <Image className="w-16 h-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-2xl" src={dp4} alt="Rounded avatar" />
        <Image className="w-16 h-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-2xl" src={dp5} alt="Rounded avatar" />
        <Image className="w-16 h-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-2xl" src={dp6} alt="Rounded avatar" />
      </div>
      {/* icons layout */}
      <div className='flex flex-wrap space-x-4 w-full justify-center'>
        <div className='rounded-full bg-white p-2'>
          <IoMicOutline className='text-blue-500 text-lg' />
        </div>
        <div className='rounded-full bg-white p-2'>
          <IoVideocamOutline className='text-blue-500 text-lg' />
        </div>
        <div className='rounded-full bg-white p-2'>
          <CiMonitor className='text-blue-500 text-lg' />
        </div>
        <div className='rounded-full bg-white p-2'>
          <CiFaceSmile className='text-blue-500 text-lg' />
        </div>
        <div className='rounded-full bg-white p-2'>
          <FaComment className='text-blue-500 text-lg' />
        </div>
        <div className='rounded-full bg-white p-2'>
          <CiSettings className='text-blue-500 text-lg' />
        </div>
      </div>
    </div>
  )
}

export default VideoBox