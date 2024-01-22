

import { AlertCircle, Ban } from 'lucide-react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'


const ProfileCard = ({profile_image, name="-", username="@", type="others"}) => {


  return (
    <div className='w-full shadow'>
        <div className={`flex flex-col gap-1 ${type === 'dashboard' && 'justify-center items-center py-8'}`}>
            <img className={`${type === 'dashboard' ? 'w-36 h-36 rounded-full' : 'w-80 h-80 rounded'} border object-cover`} src={profile_image} alt="" />

            <div className='p-3 w-full'>
              <div>
                <h1 className='font-bold text-xl text-gray-700'>{name}</h1>
                <h1 className='text-sm text-gray-500'>@{username}</h1>
              </div>

              <hr className='my-4' />

              <div className='flex flex-col gap-1'>
                <p className='font-semibold text-sm text-gray-500 flex justify-between items-center'>Marital Status<span>{"N/A"}</span></p>
                <p className='font-semibold text-sm text-gray-500 flex justify-between items-center'>Looking for<span>{"Male"}</span></p>
                <p className='font-semibold text-sm text-gray-500 flex justify-between items-center'>Country<span>{"USA"}</span></p>
              </div>
              {type === 'self' || type === 'dashboard' && (
                <Link className='flex justify-center items-center mt-5 text-white py-3 bg-indigo-500 rounded hover:bg-indigo-500/40' to={type === 'dashboard' ? `/user/member-profile/${username}` : '/'}>{type === 'dashboard' ? 'Member Profile' : 'Dashboard'}</Link>
              )}

              {type === 'others' && (
                <div className='mt-3 flex flex-1 justify-around'>
                  <h1 className='flex flex-col items-center gap-1 text-gray-500 hover:text-red-500 cursor-pointer'>
                    <Ban size={"16px"} color='red' />
                    <span className='text-xs'>ignore</span>
                  </h1>

                  <h1 className='flex flex-col items-center gap-1 text-gray-500 hover:text-red-500 cursor-pointer'>
                    <AlertCircle size={"16px"} color='gray' />
                    <span className='text-xs'>report</span>
                  </h1>
                </div>
              )}


            </div>
        </div>
    </div>
  )
}

export default ProfileCard