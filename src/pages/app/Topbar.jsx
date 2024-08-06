import React from 'react'
import Logo from '../../assets/logo/FIFTY_XCHANGE.png'

export default function Topbar() {
  return (
    <div>
        <div className=" bg-white border-l-2 p-3">
            <div className="ml-auto lg:w-fit flex justify-between items-center">
                <div className="lg:hidden w-[70px] ">
                    <img className='w-full' src={Logo} alt="" />

                </div>
                <div className='flex items-center gap-5'>
                    <div className="bg-gray-200 rounded-full py-2 px-3">
                        <i className='pi pi-bell text-gray-600'></i>
                    </div>
                    <div className='border-l-2 border-gray-600 py-1 '>
                        <div className="h-[30px]"></div>
                    </div>
                    <div className='flex items-center gap-3 bg-gray-200 rounded-full p-1 border '>
                        <div className="w-[30px] h-[30px] bg-gray-400 rounded-full "></div>
                        <p className='hidden lg:block text-xs font-bold text-gray-600'>Anonymous</p>
                        <i className='pi pi-angle-down text-gray-600'></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
