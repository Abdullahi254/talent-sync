import React from 'react';
import Image from "next/image";
import dp1 from "../../../public/shopify.png";
import dp2 from "../../../public/coinbase.png";
import dp3 from "../../../public/dropbox.png";
import dp4 from "../../../public/intercom.png";
import dp5 from "../../../public/marvel.png";
import dp6 from "../../../public/automattic.png";

type Props = {}

const PartnersCard = (props: Props) => {
    return (
        <div className='flex w-full items-center flex-col space-y-4 mb-28 lg:px-10'>
            <p className='text-gray-500 text-sm'>
                Join 1,500+ companies already video conferencing the ClearLink way
            </p>

            <div className='w-full flex flex-wrap justify-between items-center'>
                <Image height={100} width={120} className="h-auto w-auto" src={dp1} alt="partner logo" />
                <Image height={100} width={100} className="h-auto w-auto" src={dp2} alt="partner logo" />
                <Image height={100} width={100} className="h-auto w-auto" src={dp3} alt="partner logo" />
                <Image height={100} width={100} className="h-auto w-auto" src={dp4} alt="partner logo" />
                <Image height={100} width={100} className="h-8 w-auto" src={dp5} alt="partner logo" />
                <Image height={100} width={150} className="h-20 w-auto" src={dp6} alt="partner logo" />
            </div>
        </div>
    )
}

export default PartnersCard