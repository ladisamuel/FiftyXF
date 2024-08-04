import React from 'react'

export default function Topbar() {
  return (
    <div>
        <div className=" bg-white border-l-2 p-3">
            <div className="ml-auto w-fit flex items-center gap-5">
                <div className="bg-gray-200 rounded-full py-2 px-3">
                    <i className='pi pi-bell text-gray-600'></i>
                </div>
                <div className='border-l-2 border-gray-600 py-1 '>
                    <div className="h-[30px]"></div>
                </div>
                <div className='flex items-center gap-3 bg-gray-200 rounded-full p-1 border '>
                    <div className="w-[30px] h-[30px] bg-gray-400 rounded-full "></div>
                    <p className='text-xs font-bold text-gray-600'>Anonymous</p>
                    <i className='pi pi-angle-down text-gray-600'></i>
                </div>
            </div>
        </div>
    </div>
  )
}
