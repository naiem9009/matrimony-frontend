

import React from 'react'

const EducationalCard = () => {
  return (
    <div className='w-full border p-3 shadow'>
        <h1 className='text-xl font-bold text-red-700/60'>Educational Information</h1>
        <hr className='mb-3' />

        <div className='text-gray-500 flex flex-col gap-2'>
            <h1 className='flex flex-row items-center justify-between'>Institute Name <span className='font-bold'>Dhaka University</span></h1>

            <h1 className='flex flex-row items-center justify-between'>Degree <span className='font-bold'>CSE</span></h1>
            <h1 className='flex flex-row items-center justify-between'>Feild of study <span className='font-bold'>Software engineer</span></h1>
            <h1 className='flex flex-row items-center justify-between'>Starting Date <span className='font-bold'>20-09-2010</span></h1>
            <h1 className='flex flex-row items-center justify-between'>Ending Date <span className='font-bold'>20-09-2023</span></h1>
        </div>
    </div>
  )
}

export default EducationalCard