import React from 'react'
import Logo from '../../assets/logo/FIFTY_XCHANGE.png'
import AppStore from '../../assets/icons/appStore.png'
import PlayStore from '../../assets/icons/playStore.png'
import IG from '../../assets/icons/IG.png'
import tw from '../../assets/icons/tw.png'
import tt from '../../assets/icons/tt.png'
import ln from '../../assets/icons/ln.png'
export default function Footer() {

    const usefullink = [
        'Login',
        'About Us',
        'Privacy Policy',
        'How to Trade',
        'FAQ',
    ]

    const contact = [
        {
            icon: '',
            text: 'Info@fiftyX.ng'
        },
        {
            icon: '',
            text: '09064858473'
        },
        {
            icon: '',
            text: '09064858473'
        },
        
    ]
  return (
    <div className='px-5 py-10 lg:px-10 flex flex-col lg:flex-row gap-y-10 bg-[#D2E3EF] '>
        <div className="boder  lg:w-[40%] ">
            <img src={Logo} className='-ml-5 border ' alt="" />
            <p className='my-5'>Your Trusted Platform For Effortless Trading, Combining Fast Transactions with Unmatched Convenience for a Truly Seamless Experience.</p>
            <button className='flex items-center justify-center gap-2 rounded-full py-3 px-5 bg-[#2394E5] text-white'>
                <img src={PlayStore} alt="" className='w-[20px] ' />
                <img src={AppStore} alt="" className='w-[20px] ' />
                <span>Coming Soon</span>
            </button>
        </div>
        <div className="lg:px-10 lg:w-[30%] ">
            <p className='text-lg font-[Satoshi-bold] pb-5 '>Useful Links</p>
            <ul className='flex flex-col gap-3 '>
                {
                    usefullink.map((item, index)=>(
                        <li className='cursor-pointer hover:text-[#2394E5] '>{item}</li>
                    ))
                }
            </ul>
        </div>
        <div className=" lg:w-[30%] ">
            <p className='text-lg font-[Satoshi-bold] pb-5 '>Contact</p>
            <ul className='flex flex-col gap-3 '>
                <li className='cursor-pointer hover:text-[#2394E5] flex items-center gap-2 '> <i className='pi pi-envelope text-sm'></i> <span>Info@fiftyX.ng</span></li>
                <li className='cursor-pointer hover:text-[#2394E5] flex items-center gap-2 '> <i className='pi pi-phone text-sm'></i> <span>09064858473</span></li>
                <li className='cursor-pointer hover:text-[#2394E5] flex items-center gap-2 '> <i className='pi pi-whatsapp text-sm'></i> <span>09064858473</span></li>
            </ul>
        </div>
        <div className="  lg:w-[20%] ">
        <p className='text-lg font-[Satoshi-bold] pb-5 '>Follow us on</p>
            <div className='flex items-center gap-3'>
                <img src={IG} alt="" />
                <img src={tw} alt="" />
                <img src={tt} alt="" />
                <img src={ln} alt="" />

            </div>
        </div>
    </div>
  )
}
