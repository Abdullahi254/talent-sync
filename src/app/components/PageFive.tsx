import Image from 'next/image';
import React from 'react'
import { FiCheckCircle } from "react-icons/fi";
import mockup from "../../../public/mockup.png"
type Props = {}

const PageFive = (props: Props) => {
    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:px-10 mb-28 py-4'>
            {/* grid one content */}
            <div className='flex flex-col space-y-8'>
                <h1 className='text-lg md:text-2xl font-semibold'>
                    Ready to clear the path to perfect communication?
                </h1>
                <ol className='space-y-2'>
                    <li className='text-gray-600 flex items-center md:text-lg'><span className='text-blue-600 mr-3'><FiCheckCircle /></span> 30 days free trial</li>
                    <li className='text-gray-600 flex items-center md:text-lg'><span className='text-blue-600 mr-3'><FiCheckCircle /></span> Cancel at any time</li>
                    <li className='text-gray-600 flex items-center md:text-lg'><span className='text-blue-600 mr-3'><FiCheckCircle /></span> Access to all features</li>
                    <li className='text-gray-600 flex items-center md:text-lg'><span className='text-blue-600 mr-3'><FiCheckCircle /></span> Peronalized onboarding</li>
                </ol>

                <div className='flex items-center space-x-4'>
                    <button className="bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold py-2 px-6 rounded-full text-xs md:text-sm border-gray-200 border-2">
                        Talk to sales
                    </button>
                    <button className="bg-blue-700 hover:bg-blue-900 text-white font-semibold py-2 px-6 rounded-full text-xs md:text-sm">
                        Start your free trial
                    </button>
                </div>
            </div>
            {/* grid two content */}
            <Image src={mockup} alt='video call mockup' className='rounded-md border-black border-4'/>
        </div>
    )
}

export default PageFive