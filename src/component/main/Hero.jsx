import React from 'react'
import img3 from '../../assets/icons/image3.png'
import img4 from '../../assets/icons/image4.png'
import img5 from '../../assets/icons/image5.png'

export default function Hero() {
  return (
    <div className='h-[70vh] lg:h-[90vh] px-5 border bg-blue300 flex items-center justify-center '>

        <div className=' lg:w-[70%] textcenter relative'>
            <img src={img3} className='absolute top-10 lg:top-0 left-0 -translate-y-1/2 w-5 md:w-10 lg:w-auto' />
            <img src={img4} className='absolute top-8 lg:top-0 right-5 lg:right-0 -translate-y-1/2 w-7 md:w-auto lg:w-auto' />
            <img src={img5} className='absolute bottom-0 right-40 translate-y-1/2' />
            <div className='flex flex-col items-center border justify-center gap-5 text-center'>
                <p className='border border-[#9F9F9F] text-xs md:text-lg lg:text-lg px-[31px] py-2 rounded-full w-fit '>Welcome to fiftyX Crypto Platform</p>
                <h1 className='text-[20px] md:text-[40px] lg:text-[55px] font-[Satoshi-bold] lg:leading-[74.25px] '>TRADE GIFT CARDS AND <span className='text-[#2394E5] font-[Satoshi-bold]'>CRYPTOCURRENCY</span> WITH EASE</h1>
                <p className=' md:text-[22px] lg:text-[24px] text-[#4d4d4d] '>Your Trusted Platform For Effortless Trading, Combining Fast Transactions with Unmatched Convenience for a Truly Seamless Experience.</p>
                <button className='py-[15px] px-[49px] border rounded-full text-white bg-[#2394E5] '>Get Started</button>
            </div>

        </div>
        
    </div>
  )
}
