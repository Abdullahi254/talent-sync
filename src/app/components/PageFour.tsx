import React from 'react'
import FaqCard from './FaqCard'

type Props = {}

const contentList = [
    {
        title: "How many participants can join a ClearLink video conference?",
        text: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
    },
    {
        title: "Can I use ClearLink on multiple devices?",
        text: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
    },
    {
        title: "Is ClearLink compatible with other video conferencing platforms?",
        text: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
    },
    {
        title: "How does ClearLink ensure the security of my video conferences?",
        text: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
    },
    {
        title: "Do I need to download any software to use ClearLink?",
        text: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
    },
    {
        title: "What kind of customer support does ClearLink provide?",
        text: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
    }
]

const PageFour = (props: Props) => {
    return (
        // grid layout
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:px-10 mb-28 py-4'>
            {/* grid one */}
            <div className='flex flex-col space-y-3'>
                <h3 className='text-sm text-blue-700'>Support</h3>
                <h1 className='text-lg md:text-2xl font-bold'>FAQS</h1>
                <p className='text-gray-500 text-sm md:text-lg'>
                    Everything you need to know about the product and billing. Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.
                </p>
            </div>
            {/* grid two */}
            <div className='flex flex-col'>
                {contentList.map((content, index) => <FaqCard key={index} title={content.title} text={content.text} />)}
            </div>
        </div>
    )
}

export default PageFour