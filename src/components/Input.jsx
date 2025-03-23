import React from 'react'

function Input({placeholder = "Enter...", title = "email"}) {
  return (
    <div className='border border-[#CBCBCB] relative h-12 flex justify-center rounded-md'>
    <div className='bg-white font-medium text-[#6C25FF] text-xs absolute left-3 top-[-11px] px-1 capitalize'>{title}</div>
    <input type="text"  
    className='h-full w-[95%] flex outline-none placeholder:text-xs'
    placeholder={placeholder}/>
    </div>
    
  )
}

export default Input