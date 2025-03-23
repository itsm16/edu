import React from 'react'
import { useNavigate } from 'react-router'

function WelcomePage() {
    const navigate = useNavigate();

    return (
        <div className='border bg-[#F7F8F9] flex flex-col h-screen justify-end items-center'>
            <div className='flex flex-col md:items-center mb-[100px] min-w-fit md:w-[30%] md:max-w-[350px] w-[90%] md:mb-[220px] gap-7'>
                <div className='text-left flex flex-col self-start'>
                    <div className='text-[#1D2226] text-2xl font-semibold'>Welcome to PopX</div>
                    <div className='text-gray-500'>Lorem ipsum dolor sit, amet,</div>
                    <div className='text-gray-500'>consectetur adipiscing elit,</div>
                </div>
                <div className='flex flex-col gap-2 w-full '>
                    <button onClick={()=>navigate("/signup")}
                    className='bg-[#6C25FF] text-sm h-10 w-full text-white rounded-md'>Create Account</button>
                    <button className='bg-[#6C25FF4B] text-sm h-10 w-full text-black rounded-md'
                        onClick={()=>navigate("/signin")}    >
                        Already Registered? Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WelcomePage