

import React, { useContext } from 'react'
import ProfileCard from '../../components/users/profile/ProfileCard.component'
import BasicInfoCard from '../../components/users/profile/BasicInfoCard.component'
import EducationalCard from '../../components/users/profile/EducationalCard.component'
import ProfessionalCard from '../../components/users/profile/ProfessionalCard.component'
import Premium_sidebar from '../../components/users/Premium_sidebar.component'
import { UserContext } from '../../context/User.context'
import { useParams } from 'react-router-dom'
import FetchUser from '../../hooks/FetchUser.hooks'
import Loading from '../../components/Loading.component'

const Member_profile_page = () => {
  const {username} = useParams()
  const {authUser: {access_token}} = useContext(UserContext)

  const {user, loading} = FetchUser(access_token, username)

  if (loading) return <Loading />
  


  return (
    <div className='max-w-screen-xl mx-auto mt-4 pb-20'>
      <div className='flex flex-row gap-3 items-start'>

        <div className='flex flex-col gap-3'>
          <ProfileCard
            profile_image={"https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg"} 
            name={`${user?.personalDetails ? user?.personalDetails?.firstName : '' } ${user?.personalDetails ? user?.personalDetails?.lastName : ''}`}
            username={user?.username}
            type={access_token ? 'self' : 'others'}
          />
          <Premium_sidebar />
        </div>
        

        

        <div className='w-full'>
          <div>
            <BasicInfoCard />
          </div>

          <div className='mt-4'>
            <EducationalCard />
          </div>

          <div className='mt-4'>
            <ProfessionalCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Member_profile_page