import React from 'react'

export default function Accordion({item, isOpen}) {

  return (
    <div className="m-auto cursor-pointer rounded-xl border hover:border-[#D2E3EF] my-5 lg:w-[70%] ">
      <div className={`transition delay-75   rounded-xl flex justify-between items-center p-3 px-5 ${isOpen? 'rounded-br-none rounded-bl-none' : '' }`}>
        <p>{item.q}</p>
        <i className={`pi ${isOpen? 'pi-minus' : 'pi-plus'} text-xs`}></i>
      </div>
      <div className={`${isOpen? 'block': 'hidden'} bg-[#E6E6E6] p-3 px-5 rounded-br-xl rounded-bl-xl `}>
        <p>
          {item.ans}
        </p>
      </div>
    </div>
  )
}
