import React from 'react'
import country from 'country-list-js';
const countryList = country.names()

const MyLocationForm = ({type}) => {
    
  return (
    <form action="" className='mt-8 flex flex-col gap-4'>
        {type === 'present-address' && (
            <div className='flex flex-col gap-2'>
                <label htmlFor="">Present country</label>
                <select name="" className='w-full h-12 px-3 border text-gray-600'>
                <option>Choose country... </option>
                {countryList?.map((country, index) => (
                    <option key={index} value={country}>{country}</option>
                ))}
                </select>
            </div>
        )}


        {type === 'permanent-address' && (
            <div className='flex flex-col gap-2'>
                <label htmlFor="">Permanent country</label>
                <select name="" className='w-full h-12 px-3 border text-gray-600'>
                <option>Choose country... </option>
                {countryList?.map((country, index) => (
                    <option key={index} value={country}>{country}</option>
                ))}
                </select>
            </div>
        )}

        <div className='flex flex-row gap-2'>
            <input placeholder='Zip code' type="text" name="" className='w-full h-12 px-3 border text-gray-600' />
            <input placeholder='State' type="text" name="" className='w-full h-12 px-3 border text-gray-600' />
            <input placeholder='City' type="text" name="" className='w-full h-12 px-3 border text-gray-600' />
        </div>

        {type === 'permanent-address' && <button className='bg-indigo-500 py-3 rounded mt-5 font-bold text-white'>Save</button>}
    </form>
  )
}

export default MyLocationForm