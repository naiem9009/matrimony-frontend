

import React, { useContext } from 'react'
import ProfileCard from '../../components/users/profile/ProfileCard.component'
import Premium_sidebar from '../../components/users/Premium_sidebar.component'
import { UserContext } from '../../context/User.context'
import Card from "../../components/Card.component"
import { Heart } from 'lucide-react'
import { cardData } from '../../../data'
import FetchUser from '../../hooks/FetchUser.hooks'
import Loading from '../../components/Loading.component'
import Profile_sidebar from '../../components/users/Profile_sidebar.component'

const User_Dashboard_page = ({type}) => {

  const {authUser: {access_token, username}} = useContext(UserContext)


  const {user, loading} = FetchUser(access_token, username)

  if (loading) return <Loading />




  
  

 

  return (
    <div className='max-w-screen-xl mx-auto mt-4 pb-20'>
      <div className='flex flex-row gap-3 items-start'>

        <div className='flex flex-col gap-3'>
          <ProfileCard
            profile_image={"https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg"} 
            name={`${user?.personalDetails?.firstName} ${user?.personalDetails?.lastName}`}
            username={username}
            type={access_token ? 'dashboard' : 'others'}
          />
          <Profile_sidebar type={type} page={'dashboard'} />
          <Premium_sidebar />
        </div>

        <div className='w-full'>
          <div className='grid grid-cols-3 gap-5'>
            {type === 'dashboard' && cardData?.map((d, i) => (
              <Card
                key={i}
                Icon={d.Icon}
                count={d.count}
                content={d.content}
                className={d.className}

              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default User_Dashboard_page