import React from 'react'
import Input from '../components/Input'
import { useNavigate } from 'react-router';

function SignUp() {
    const navigate = useNavigate();

    return (
        <div className='h-screen flex flex-col items-center'>
            <div className='h-full flex flex-col justify-between my-10 md:w-[30%] md:max-w-[350px] w-[90%]'>
                <div className='flex flex-col gap-5'>
                    <div className='text-[#1D2226] text-2xl font-semibold'>
                        <div>Create your</div>
                        <div>PopX account</div>
                    </div>
                    <Input title='Full Name' placeholder='Full Name'/>
                    <Input title='Phone Number' placeholder='Phone Number' />
                    <Input title='Email address' placeholder='Email address' />
                    <Input title='Password' placeholder='Password' />
                    <Input title='Company Name' placeholder='Company Name' />
                    <div className='flex flex-col text-sm gap-1 font-light'>
                        <label htmlFor="radio">
                            Are you an agency?
                        </label>
                        <div className='flex gap-5'>
                            <label className='flex gap-2 items-center text-xs'>
                                <div className='border flex items-center justify-center rounded-full border-[#6C25FF]'><input type="radio" name='radio' className='m-1 appearance-none w-4 h-4 border-none checked:border-[#6C25FF] rounded-full checked:bg-[#6C25FF]' /></div>
                                Yes
                            </label>
                            <label className='flex gap-2 items-center text-xs'>
                                <div className='border flex items-center justify-center rounded-full border-[#6C25FF]'><input type="radio" name='radio' className='m-1 appearance-none w-4 h-4 border-none checked:border-[#6C25FF] rounded-full checked:bg-[#6C25FF]' /></div>
                                No
                            </label>
                        </div>
                    </div>
                </div>
                <button onClick={()=>navigate("/account")}
                    className='bg-[#6C25FF] text-sm h-10 w-full text-white rounded-md'>Create Account</button>

            </div>
        </div>
    )
}

export default SignUp