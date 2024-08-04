import React from 'react'
import Logo from '../../assets/logo/FIFTY_XCHANGE.png'

export default function Sidebar() {
  return (
    <div className="w-[17%] relative h-full bg-white ">
        <div className=" p-3">
            <img src={Logo} alt="" />
        </div>
        <div className="mt-5 flex flex-col gap-2">
            <div className='flex items-center gap-3 cursor-pointer hover:bg-[#2394E5] px-8 py-2 hover:text-white'>
                <i className='pi pi-objects-column font-bold text-xl' ></i>
                <p className='text-sm fon-bold] '>Dashboard</p>
            </div>
            <div className='flex items-center gap-3 cursor-pointer hover:bg-[#2394E5] px-8 py-2 hover:text-white'>
                <i className='pi pi-gift font-bold text-xl' ></i>
                <p className='text-sm fon-bold] '>Gift Cards</p>
            </div>
            <div className='flex items-center gap-3 group cursor-pointer hover:bg-[#2394E5] px-8 py-2 hover:text-white'>
                <i className='pi pi-wallet text-xl '></i>
                <p className='text-sm fon-bold] '>Wallet</p>
            </div>
            <div className='flex items-center gap-3 cursor-pointer hover:bg-[#2394E5] px-8 py-2 hover:text-white'>
                <i className='pi pi-money-bill text-xl '></i>
                <p className='text-sm fon-bold] '>Transactions</p>
            </div>
            <div className='flex items-center gap-3 cursor-pointer hover:bg-[#2394E5] px-8 py-2 hover:text-white'>
                <i className='pi pi-globe text-xl '></i>
                <p className='text-sm fon-bold] '>Refferals</p>
            </div>
            <div className='flex items-center gap-3 cursor-pointer hover:text-white hover:bg-[#2394E5] px-8 py-2 '>
                <i className='pi pi-wallet text-xl '></i>
                <p className='text-sm fon-bold] '>Rates</p>
            </div>
        </div>

        <div className="absolute bottom-5 w-full">
            
            <div className=' flex items-center gap-3 cursor-pointer hover:bg-[#2394E5] px-8 py-2 hover:text-white'>
                <i className='pi pi-cog font-bold text-xl' ></i>
                <p className='text-sm fon-bold] '>Settings</p>
            </div>
            <div className='flex items-center gap-3 cursor-pointer hover:bg-[#2394E5] px-8 py-2 hover:text-white'>
                <i className='pi pi-question-circle font-bold text-xl' ></i>
                <p className='text-sm fon-bold] '>Help</p>
            </div>
            <div className='flex items-center gap-3 cursor-pointer group hover:bg-[#2394E5] px-8 py-2  font-bold text-red-500 hover:text-red-700'>
                <i className='pi pi-sign-out text-xl' ></i>
                <p className='text-sm  '>Log out</p>
            </div>
        </div>
    </div>
  )
}
