import React from 'react'
import { CiVideoOn, CiCalendar } from "react-icons/ci";
import { GiSoundWaves, GiDialPadlock } from "react-icons/gi";
import gridImages from "../../../public/Rectangle 1.png"
import drawing from "../../../public/Hand-drawn arrow.png"
import Image from 'next/image';
type Props = {}

const PageTwo = (props: Props) => {
    return (
        <div className='w-full flex flex-col space-y-8 lg:px-10 mb-28'>
            {/* why choose clearlink */}
            <div className='w-full grid grid-cols-1 md:grid-cols-2 mb-12'>
                <div className='w-full flex flex-col space-y-4'>
                    <h2 className='text-blue-700 text-sm font-semibold'>The ClearLink Advantage</h2>
                    <h1 className='text-lg md:text-2xl font-bold'>Why choose ClearLink?</h1>
                    <p className='text-gray-500 text-sm md:text-lg'>
                        In a world where connection is everything, ClearLink takes the lead. Our
                        cutting-edge video conferencing app offers:
                    </p>
                </div>
            </div>
            {/* outer grid */}
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
                {/* inner grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {/* grid content*/}
                    <div className='flex flex-col space-y-3'>
                        <CiVideoOn className='text-blue-600 text-lg' />
                        <h2 className='font-semibold text-sm md:text-base'>
                            Crystal-clear HD video
                        </h2>
                        <p className='text-sm text-gray-500'>
                            No more pixelation or blurriness &ndash; just stunning, lifelike clarity that brings your team closer in meetings.
                        </p>
                    </div>
                    {/* grid content*/}
                    <div className='flex flex-col space-y-3'>
                        <GiSoundWaves className='text-blue-600 text-lg' />
                        <h2 className='font-semibold text-sm md:text-base'>
                            Noise-canceling audio
                        </h2>
                        <p className='text-sm text-gray-500'>
                            Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.
                        </p>
                    </div>
                    {/* grid content*/}
                    <div className='flex flex-col space-y-3'>
                        <CiCalendar className='text-blue-600 text-lg' />
                        <h2 className='font-semibold text-sm md:text-base'>
                            Scheduling made easy
                        </h2>
                        <p className='text-sm text-gray-500'>
                            Streamline your agenda with ClearLink&apos;s intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.
                        </p>
                    </div>
                    {/* grid content*/}
                    <div className='flex flex-col space-y-3'>
                        <GiDialPadlock className='text-blue-600 text-lg' />
                        <h2 className='font-semibold text-sm md:text-base'>
                            Bank-grade security
                        </h2>
                        <p className='text-sm text-gray-500'>
                            Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.
                        </p>
                    </div>
                </div>
                {/* grid of images */}
                <div className='relative mt-8 md:mt-1'>
                    <Image src={gridImages} className='h-auto w-[500px]' alt='grid images' priority/>
                    <div className='absolute right-56 -top-56 hidden lg:block'>
                        <Image src={drawing} alt='hand drawn image' priority/>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default PageTwo
