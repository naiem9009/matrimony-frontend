
import React from 'react'

const ProfessionalCard = () => {
  return (
    <div className='w-full border p-3 shadow'>
        <h1 className='text-xl font-bold text-red-700/60'>Professional Information</h1>
        <hr className='mb-3' />

        <div className='flex flex-col gap-2'>
            <h1 className='flex flex-row items-center justify-between'>Company Name <span className='font-bold'>Software company</span></h1>

            <h1 className='flex flex-row items-center justify-between'>Designation <span className='font-bold'>Software Engineer</span></h1>

            <h1 className='flex flex-row items-center justify-between'>Starting Date <span className='font-bold'>09-02-2014</span></h1>

            <h1 className='flex flex-row items-center justify-between'>Ending Date <span className='font-bold'>Running</span></h1>
        </div>
    </div>
  )
}

export default ProfessionalCard