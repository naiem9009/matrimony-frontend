

import React from 'react'
import { Link } from 'react-router-dom'

const Partner_sidebar = ({type}) => {
  return (
    <div className='w-[300px] border shadow'>
        <h1 className='block p-3 bg-red-400/40 text-center text-[#E33183] font-bold'>Partner Preference</h1>
        <Link to='/user/profile/religion-preferences' className={`${type === 'religion-preferences' ? 'bg-[#E33183] text-white' : 'bg-white'} border block p-3 hover:bg-[#E33183] hover:text-white`}>Religion Preferences</Link>
        
        <Link to='/user/profile/professional-preferences' className={`${type === 'professional-preferences' ? 'bg-[#E33183] text-white' : 'bg-white'} border block p-3 hover:bg-[#E33183] hover:text-white`}>Professional Preferences</Link>
        
        <Link to='/user/profile/location-preferences' className={`${type === 'location-preferences' ? 'bg-[#E33183] text-white' : 'bg-white'} border block p-3 hover:bg-[#E33183] hover:text-white`}>Location Preferences</Link>

        <Link to='/user/profile/others-preferences' className={`${type === 'others-preferences' ? 'bg-[#E33183] text-white' : 'bg-white'} border block p-3 hover:bg-[#E33183] hover:text-white`}>Others Preferences</Link>
    </div>

  )
}

export default Partner_sidebar