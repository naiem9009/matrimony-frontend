

import React from 'react'
import { Link } from 'react-router-dom'

const Profile_sidebar = ({type, page}) => {

  return (
    <div className='w-[300px] border shadow'>
      {page === 'profile-edit' && <h1 className='block p-3 bg-red-400/40 text-center text-[#E33183] font-bold'>Profile Update</h1> }
      <Link to={`${page === 'profile-edit' ? '/user/profile/photo-change' : '/user/dashboard'}`} className={`${type === 'photo-change' || type === 'dashboard' ? 'bg-[#E33183] text-white' : 'bg-white'} border block p-3 hover:bg-[#E33183] hover:text-white`}>{page === 'profile-edit' ? 'Photo change' : 'Dashboard'}</Link>
      
      <Link to={page === 'profile-edit' ? '/user/profile/about-me' : '/user/purchase-history'} className={`${type === 'about-me' || type === 'purchase-history' ? 'bg-[#E33183] text-white' : 'bg-white'} border block p-3 hover:bg-[#E33183] hover:text-white`}>{page === 'profile-edit' ? 'About me' : 'Purchase History'}</Link>
      
      <Link to={page === 'profile-edit' ? '/user/profile/basic-info': '/user/gallery'} className={`${type === 'basic-info' || type === 'gallery' ? 'bg-[#E33183] text-white' : 'bg-white'} border block p-3 hover:bg-[#E33183] hover:text-white`}>{page === 'basic-info' ? 'Basic Details' : 'Gallery'}</Link>
      
      <Link to={page === 'profile-edit' ? '/user/profile/religion-info' : '/user/my-interest'} className={`${type === 'religion-info' || type === 'my-interest' ? 'bg-[#E33183] text-white' : 'bg-white'} border block p-3 hover:bg-[#E33183] hover:text-white`}>{page === 'profile-edit' ? 'Religion Information' : 'My Interests'}</Link>
      
      <Link to={page === 'profile-edit' ? '/user/profile/my-location' : '/user/interest-request'} className={`${type === 'my-location' || type === 'interest-request' ? 'bg-[#E33183] text-white' : 'bg-white'} border block p-3 hover:bg-[#E33183] hover:text-white`}>{page === 'profile-edit' ? 'My Location' : 'Interest Request'}</Link>

      <Link to={page === 'profile-edit' ? '/user/profile/professional-info' : '/user/profile/about-me'} className={`${type === 'professional-info' ? 'bg-[#E33183] text-white' : 'bg-white'} border block p-3 hover:bg-[#E33183] hover:text-white`}>{page === 'profile-edit' ? 'Professional information' : 'Profile Setting'}</Link>
      
      {page === 'profile-edit' && (
        <>
          <Link to='/user/profile/about-my-family' className={`${type === 'about-my-family' ? 'bg-[#E33183] text-white' : 'bg-white'} border block p-3 hover:bg-[#E33183] hover:text-white`}>About my family</Link>
          
          <Link to='/user/profile/life-style' className={`${type === 'life-style' ? 'bg-[#E33183] text-white' : 'bg-white'} border block p-3 hover:bg-[#E33183] hover:text-white`}>Life style</Link>


          <Link to='/user/profile/education' className={`${type === 'education' ? 'bg-[#E33183] text-white' : 'bg-white'} border block p-3 hover:bg-[#E33183] hover:text-white`}>Education</Link>
        </>
      )}
    </div>
  )
}

export default Profile_sidebar