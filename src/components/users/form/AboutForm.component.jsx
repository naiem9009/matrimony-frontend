
import React from 'react'

const AboutForm = () => {
  return (
    <form action="" className='mt-8 flex flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        <label htmlFor="">First Name</label>
        <input type="text" name="" className='w-full h-12 px-3 border text-gray-600' />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor="">Last Name</label>
        <input type="text" name="" className='w-full h-12 px-3 border text-gray-600' />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor="">Age</label>
        <input type="text" name="" className='w-full h-12 px-3 border text-gray-600' />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor="">Hight</label>
        <input type="text" name="" className='w-full h-12 px-3 border text-gray-600' />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor="">Weight</label>
        <input type="text" name="" className='w-full h-12 px-3 border text-gray-600' />
      </div>

      <div className='flex flex-row gap-2'>
        <div className='w-full'>
          <label htmlFor="">Gender</label>
          <select name="" className='w-full h-12 px-3 border text-gray-600'>
            <option value="">Male</option>
            <option value="">Female</option>
            
          </select>
        </div>
      </div>

      <div className='flex flex-row gap-2'>
        <div className='w-full'>
          <label htmlFor="">Marital status</label>
          <select name="" className='w-full h-12 px-3 border text-gray-600'>
            <option value="">Single</option>
            <option value="">Married</option>
            <option value="">Unmarried</option>
            
          </select>
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor="">Body Type</label>
        <div className='flex items-center gap-5'>
          <input type="radio" name="body_type" className='w-8 h-8' /> Slim
          <input type="radio" name="body_type" className='w-8 h-8' /> Athletic
          <input type="radio" name="body_type" className='w-8 h-8' /> Average
          <input type="radio" name="body_type" className='w-8 h-8' /> Heavy
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor="">Physical Status</label>
        <div className='flex items-center gap-5'>
          <input type="radio" name="physical_status" className='w-8 h-8' /> Normal
          <input type="radio" name="physical_status" className='w-8 h-8' /> Physically

        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor="">Drinking</label>
        <div className='flex items-center gap-5'>
          <input type="radio" name="drinking" className='w-8 h-8' /> Yes
          <input type="radio" name="drinking" className='w-8 h-8' /> No

        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor="">Smoking</label>
        <div className='flex items-center gap-5'>
          <input type="radio" name="smoking" className='w-8 h-8' /> Yes
          <input type="radio" name="smoking" className='w-8 h-8' /> No

        </div>
      </div>




      <button className='bg-indigo-500 py-3 rounded mt-5 font-bold text-white'>Save</button>





    </form>
  )
}

export default AboutForm