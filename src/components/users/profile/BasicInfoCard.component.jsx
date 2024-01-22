

import React from 'react'

const BasicInfoCard = () => {
  return (
    <div className='w-full border p-3 shadow'>
        <h1 className='text-xl font-bold text-red-700/60'>Basic Information</h1>
        <hr className='mb-3' />

        <div className='grid grid-cols-2 gap-20 text-gray-500'>
            <div className='flex flex-col gap-1'>
                <h1 className='flex flex-row items-center justify-between'>Age <span className='font-bold'>N/A</span></h1>
                <h1 className='flex flex-row items-center justify-between'>Height <span className='font-bold'>N/A</span></h1>
                <h1 className='flex flex-row items-center justify-between'>Religion <span className='font-bold'>N/A</span></h1>
                <h1 className='flex flex-row items-center justify-between'>Languages <span className='font-bold'>N/A</span></h1>
                <h1 className='flex flex-row items-center justify-between'>Eye Color <span className='font-bold'>N/A</span></h1>
                <h1 className='flex flex-row items-center justify-between'>Hair Color <span className='font-bold'>N/A</span></h1>
                <h1 className='flex flex-row items-center justify-between'>Blood Group <span className='font-bold'>N/A</span></h1>
                <h1 className='flex flex-row items-center justify-between'>Disability <span className='font-bold'>N/A</span></h1>
            </div>


            <div className='flex flex-col gap-1'>
                <h1 className='flex flex-row items-center justify-between'>Profession <span className='font-bold'>N/A</span></h1>
                <h1 className='flex flex-row items-center justify-between'>Complexion <span className='font-bold'>N/A</span></h1>
                <h1 className='flex flex-row items-center justify-between'>Present Address <span className='font-bold'>N/A</span></h1>
                <h1 className='flex flex-row items-center justify-between'>Permanent Address <span className='font-bold'>N/A</span></h1>
                <h1 className='flex flex-row items-center justify-between'>Father's Name <span className='font-bold'>N/A</span></h1>
                <h1 className='flex flex-row items-center justify-between'>Father's Profession <span className='font-bold'>N/A</span></h1>
                <h1 className='flex flex-row items-center justify-between'>Mother's Name <span className='font-bold'>N/A</span></h1>
                <h1 className='flex flex-row items-center justify-between'>Mother's Profession <span className='font-bold'>N/A</span></h1>
            </div>

        </div>
    </div>
  )
}

export default BasicInfoCard