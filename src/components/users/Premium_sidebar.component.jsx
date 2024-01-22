
import { Check, Trophy } from 'lucide-react'
import React from 'react'

const Premium_sidebar = () => {
  return (
    <div className='flex flex-col justify-center w-[300px] items-center gap-5 p-8 border shadow'>
        <Trophy color='#E33183' size={'40px'} />
        <h1 className='text-center text-xl font-semibold text-[#E33183]'>Became A <br /> Premium Member</h1>
        <div>
          <p className='flex gap-2 items-center'><Check color='#E33183' size={'20px'} /> Contact Mateches Directly</p>
          <p className='flex gap-2 items-center'><Check color='#E33183' size={'20px'} /> Chat and send unlimited message</p>
          <p className='flex gap-2 items-center'><Check color='#E33183' size={'20px'} /> Verified badged</p>
        </div>
    </div>
  )
}

export default Premium_sidebar