import React from 'react'
import Input from '../components/Input'

function SignInPage() {
  return (
    <div className="bg-[#F7F8F9] flex flex-col h-screen items-center">
        <div className='flex flex-col md:items-center mb-[100px] min-w-fit mt-[50px] md:mt-[100px] md:w-[30%] md:max-w-[350px] w-[93%] gap-7'>
        <div className='self-start'>
            <div className='text-[#1D2226] text-2xl font-semibold'>Signin to your</div>
            <div className='text-[#1D2226] text-2xl font-semibold'>PopX account</div>
            <div>
                <div className='text-gray-500'>Lorem ipsum dolor sit amet,</div>
                <div className='text-gray-500'>consectetur adipiscing elit,</div>
            </div>
        </div>
        <div className='flex flex-col gap-5 w-full'>
            <Input placeholder='Email'/>
            <Input title='password' placeholder='Password'/>
            <button className='btn bg-[#CBCBCB] text-white text-sm h-10 w-full rounded-md'>Login</button>
        </div>
    </div>
    </div>
  )
}

export default SignInPage