import React from 'react'
import { FaCamera } from "react-icons/fa";
import img from '../assets/pic.jpg'


function Card({name = "Marry Doe", email = "marry@gmail.com", body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident at cum maxime nemo. Natus facere possimus sint fuga aut quas."}) {
  return (
    <div className='h-fit border-b border-dashed border-gray-400 md:max-w-[500px]'>
      <div>
        <div className='p-5 w-full flex gap-5'>
          <div className='w-[100px] h-[100px] rounded-full relative flex items-center justify-center'>
            <img src={img} alt="k" className='w-[98%] h-[98%] rounded-full object-cover' />
            <div className='bg-[#6C25FF] text-white absolute bottom-[8px] right-0  flex justify-center items-center  w-7 h-7 rounded-full'><FaCamera size={16} /></div>
          </div>
          <div className=''>
            <div className='text-xl font-semibold'>{name}</div>
            <div>{email}</div>
          </div>
        </div>
        <div className='px-5 pb-5 text-lg'>
          {body}
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Card