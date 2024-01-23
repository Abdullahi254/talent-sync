'use client'

import React, { useState } from 'react'
import { CiCircleMinus } from "react-icons/ci";
import { IoMdAddCircleOutline } from "react-icons/io";

type Props = {
    title: string
    text: string
}

const FaqCard = ({ title, text }: Props) => {
    const [show, setShow] = useState<boolean>(false)
    return (
        <div className='bg-gray-50 border-b-2 border-gray-200 p-6 space-y-4 rounded-lg w-full'>
            <div className='flex justify-between'>
                <h3 className='font-semibold text-sm md:text-base'>{title}</h3>
                {
                    show ? <span onClick={() => setShow(prev => !prev)} className='cursor-pointer text-gray-500'><CiCircleMinus /></span> : <span onClick={() => setShow(prev => !prev)} className='cursor-pointer text-gray-500'><IoMdAddCircleOutline /></span>
                }
            </div>
            {
                show &&
                <p className='text-gray-700 text-sm'>
                    {text}
                </p>
            }
        </div>
    )
}

export default FaqCard