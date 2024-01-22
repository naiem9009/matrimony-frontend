

import React from 'react'

const ProfessionalForm = () => {
    return (

        <form action="" className='mt-8 flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <label htmlFor="">Company Name</label>
            <input type="text" name="" className='w-full h-12 px-3 border text-gray-600' />
          </div>
          <div className='flex flex-row gap-2'>
            <input placeholder='Designation' type="text" name="" className='w-full h-12 px-3 border text-gray-600' />
            <input placeholder='Starting date' type="text" name="" className='w-full h-12 px-3 border text-gray-600' />
            <input placeholder='Ending Date' type="text" name="" className='w-full h-12 px-3 border text-gray-600' />
          </div>

          
          <button className='bg-indigo-500 py-3 rounded mt-5 font-bold text-white'>Save</button>
    
    
    
    
    
        </form>
    
      )
}

export default ProfessionalForm