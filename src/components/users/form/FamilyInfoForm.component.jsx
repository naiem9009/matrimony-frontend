

import { SquareUserRound } from 'lucide-react'
import React from 'react'

const FamilyInfoForm = () => {
  return (

    <form action="" className='mt-8 flex flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        <label htmlFor="">Fathers Name</label>
        <input type="text" name="" className='w-full h-12 px-3 border text-gray-600' />
      </div>
      <div className='flex flex-row gap-2'>
        <input placeholder='Father Profession' type="text" name="" className='w-full h-12 px-3 border text-gray-600' />
        <input placeholder='Father Contact' type="text" name="" className='w-full h-12 px-3 border text-gray-600' />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor="">Mother Name</label>
        <input type="text" name="" className='w-full h-12 px-3 border text-gray-600' />
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex flex-row gap-2'>
          <input placeholder='Mother Profesion' type="text" name="" className='w-full h-12 px-3 border text-gray-600' />
          <input placeholder='Mother Contact' type="text" name="" className='w-full h-12 px-3 border text-gray-600' />
        </div>

        <div className='flex flex-row gap-2'>
          <input placeholder='Total Brother' type="text" name="" className='w-full h-12 px-3 border text-gray-600' />
          <input placeholder='Total Sister' type="text" name="" className='w-full h-12 px-3 border text-gray-600' />
        </div>
      </div>
      

      




      <button className='bg-indigo-500 py-3 rounded mt-5 font-bold text-white'>Save</button>





    </form>

  )
}

export default FamilyInfoForm