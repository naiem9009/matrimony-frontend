
import React from 'react'

const BasicDetailsForm = () => {
  return (
    <form action="" className='mt-8 flex flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        <label htmlFor="">Looking for</label>
        <select name="" className='w-full h-12 px-3 border text-gray-600'>
          <option value="">Choose ... </option>
          <option value="">Brid's</option>
          <option value="">Groom</option>
          <option value="">Both</option>
        </select>
      </div>

      <div className='flex flex-row gap-2'>
        <div className='w-full'>
          <label htmlFor="">Age from</label>
          <select name="" className='w-full h-12 px-3 border text-gray-600'>
            <option value="">18</option>
            <option value="">19</option>
            <option value="">20</option>
            <option value="">21</option>
          </select>
        </div>

        <div className='w-full'>
          <label htmlFor="">Age to</label>
          <select name="" className='w-full h-12 px-3 border text-gray-600'>
            <option value="">18</option>
            <option value="">19</option>
            <option value="">20</option>
            <option value="">21</option>
          </select>
        </div>
      </div>
      <div className='flex flex-row gap-2'>
        <div className='w-full'>
          <label htmlFor="">Height from</label>
          <select name="" className='w-full h-12 px-3 border text-gray-600'>
            <option value="">5.1 in</option>
            <option value="">5.2 in</option>
            <option value="">5.5 in</option>
            <option value="">5.6 in</option>
          </select>
        </div>

        <div className='w-full'>
          <label htmlFor="">Height to</label>
          <select name="" className='w-full h-12 px-3 border text-gray-600'>
            <option value="">6.1 in</option>
            <option value="">6.2 in</option>
            <option value="">6.5 in</option>
            <option value="">6.6 in</option>
          </select>
        </div>
      </div>
      <div className='flex flex-row gap-2'>
        <div className='w-full'>
          <label htmlFor="">Weight from</label>
          <select name="" className='w-full h-12 px-3 border text-gray-600'>
            <option value="">40 kg</option>
            <option value="">60 kg</option>
            <option value="">40 kg</option>
            <option value="">45 kg</option>
          </select>
        </div>

        <div className='w-full'>
          <label htmlFor="">Weight to</label>
          <select name="" className='w-full h-12 px-3 border text-gray-600'>
            <option value="">90 kg</option>
            <option value="">65 kg</option>
            <option value="">50 kg</option>
            <option value="">60 kg</option>
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

export default BasicDetailsForm