import React, { useState } from 'react'
import Logo from '../assets/logo/FIFTY_XCHANGE.png'

export default function Header() {

    const [ skin, setSkin ] = useState(true)


    const menu_items = [
        'Home',
        'Trade Now',
        'About Us',
        'Contact',
    ]    
    return (
        <div className='borde border--black flex justify-between h-[10vh] items-center px-10 '>
            <div className=" w-[100px] brder">
                <img src={Logo} className='w-full' alt="" />
            </div>
            <div className="">
                <ul className='flex items-center gap-5 text-sm'>
                    {menu_items.map((item, index)=>(
                        <li key={index} className=' text-[grey] px-5 py-2 hover:text-[#2394E5] cursor-pointer ' >{item}</li>
                    ))}
                    <div onClick={()=>setSkin(!skin)} className={`p-[2px] cursor-pointer w-12 rounded-full border flex items-center ${skin ? 'justify-start bg-[#D2E3EF] ' : 'justify-end bg-[#5c5c5c]'}`}>
                        {skin ? 
                            <i className='pi pi-sun bg[#2394E5] bg-[#2394E5] text-[#2394E5] text-[17px]  rounded-full p-[.8px] '></i>
                            :
                            <i className='pi pi-moon bg-[#5c5c5c] text-[#fff] rounded-full p-1 '></i>
                        }
                        </div>
                    <button>Login</button>
                    <button className='bg-[#2394E5] rounded-full px-7 py-3 text-white ' >Sign Up</button>
                </ul>
            </div>
        </div>
    )
}
