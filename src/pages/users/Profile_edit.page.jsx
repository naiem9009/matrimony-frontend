import React from 'react'
import Profile_sidebar from '../../components/users/Profile_sidebar.component'
import Partner_sidebar from '../../components/users/Partner_sidebar.component'
import Premium_sidebar from '../../components/users/Premium_sidebar.component'
import BasicDetailsForm from '../../components/users/form/BasicDetailsForm.component'
import FamilyInfoForm from '../../components/users/form/FamilyInfoForm.component'
import AboutForm from '../../components/users/form/AboutForm.component'
import EducationalForm from '../../components/users/form/EducationalForm.component'
import { SquareUserRound } from 'lucide-react'
import ProfessionalForm from '../../components/users/form/ProfessionalForm.component'
import MyLocationForm from '../../components/users/form/MyLocationForm.component'

const Profile_edit_page = ({type}) => {
  return (
    <div className='max-w-screen-xl mx-auto my-16'>
      <div className='flex gap-10 w-full'>
        <div className='flex flex-col gap-5'>
          <Profile_sidebar type={type} page={'profile-edit'}/>
          <Partner_sidebar type={type} page={'profile-edit'} />
          <Premium_sidebar />
        </div>

        <div className='w-full'>
          {type === 'basic-info' && (
            <div className='p-3 border w-full'>
              <h1 className='flex gap-2 items-center text-xl text-gray-600 font-bold'><SquareUserRound color='green' />
                Basic Details
              </h1>
              <BasicDetailsForm />
            </div>
          )}
          {type === 'about-my-family' && (
            <div className='p-3 border w-full'>
              <h1 className='flex gap-2 items-center text-xl text-gray-600 font-bold'><SquareUserRound color='green' />
                About my family
              </h1>
              <FamilyInfoForm />
            </div>
          )}
          {type === 'about-me' && (
            <div className='p-3 border w-full'>
              <h1 className='flex gap-2 items-center text-xl text-gray-600 font-bold'><SquareUserRound color='green' />
                About me
              </h1>
              <AboutForm />
            </div> 
          ) }
          {type === 'education' && (
            <div className='p-3 border w-full'>
              <div className='flex justify-between items-center'>
                <h1 className='flex gap-2 items-center text-xl text-gray-600 font-bold'><SquareUserRound color='green' />
                  Education
                </h1>

                {/* <button className='px-4 py-2 bg-gray-700 text-white rounded'>Add new</button> */}
              </div>
              <EducationalForm />
            </div>
          )}

          {type === 'professional-info' && (
            <div className='p-3 border w-full'>
              <div className='flex justify-between items-center'>
                <h1 className='flex gap-2 items-center text-xl text-gray-600 font-bold'><SquareUserRound color='green' />
                  Profesional Information
                </h1>

                {/* <button className='px-4 py-2 bg-gray-700 text-white rounded'>Add new</button> */}
              </div>
              <ProfessionalForm />
            </div>
          )}



          
          {type === 'my-location' && (
            <div className='p-3 border w-full'>
              <h1 className='flex gap-2 items-center text-xl text-gray-600 font-bold'><SquareUserRound color='green' />
                Present Address
              </h1>
              <MyLocationForm type='present-address' />


              <div className='flex gap-5 mt-8 items-center'>
                <h1 className='flex gap-2 items-center text-xl text-gray-600 font-bold'><SquareUserRound color='green' />
                  Permanent Address
                </h1>
                <div>
                  <input type="checkbox" name="" id="" /> <span className='text-sm text-gray-500'>Same as present address?</span>
                </div>
              </div>

              <MyLocationForm type='permanent-address' />
            </div>
          )}
          
        </div>
      </div>
    </div>
  )
}

export default Profile_edit_page