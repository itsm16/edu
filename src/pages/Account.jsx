import React from 'react'
import Card from '../components/Card'

function Account() {
  return (
    <div className='h-screen'>
        <div className='h-[75px] items-center flex px-6 text-xl'>Account Settings</div>
        <div className='main-height bg-[#F7F8F9] flex flex-col items-center'>
            <Card/>
        </div>
    </div>
  )
}

export default Account