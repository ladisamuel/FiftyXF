import React from 'react'
import flash from '../../assets/icons/FlashOn.png'
import checkMark from '../../assets/icons/CheckMark.png'
import protect from '../../assets/icons/Protect.png'

export default function Features() {
    const features = [
        {
            img : flash,
            head : 'Blazing Fast-Payouts',
            text : 'Send your crypto assets or upload your gift card details with a receipt for instant payouts – hassle-free and quick.'
        },
        {
            img : checkMark,
            head : 'Effortless Transfers',
            text : 'Experience lightning-speed payouts the moment you upload your receipt, ensuring you get your cash without any delays.'
        },
        {
            img : protect,
            head : 'Intuitive and Secure Platform',
            text : 'Enjoy a user-friendly and secure platform designed to make your crypto and gift card exchanges smooth and worry-free every time.'
        },

    ]
  return (
    <div className='lg:flex justify-between'>
        {
            features.map((item, index)=>(
        <div key={index} className='bg-[#E6E6E6] rounded-xl h-64 lg:w-[30%] my-10 text-center py-10 px-5 '>
            <p className='w-[50px] h-[50px] bg-[#2394E5] p-2 m-auto rounded-full '>
                <img src={item.img} alt="" />
            </p>
            <p className='my-2'>{item.head}</p>
            <p>{item.text}</p>
        </div>

            ))
        }
    </div>
  )
}
