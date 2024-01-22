import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import UserLayout from './components/UserLayout.component'
import HomePage from './pages/Home.page'
import AuthUserContext, {UserContext} from './context/User.context'
import AuthUserPage from './pages/AuthUser.page'
import User_Dashboard_page from './pages/users/Dashboard.page'
import Profile_edit_page from './pages/users/Profile_edit.page'
import Member_profile_page from './pages/users/Member_profile.page'
import RouteProtect from './components/Route-protect'
import Loading from './components/Loading.component'



function App() {
  

  const {authUser, authUser:{access_token}, setAuthUser, loading} = AuthUserContext()

  if (loading) return <Loading />
  



  return (
    <>
    <UserContext.Provider value={{authUser, setAuthUser}} >
      <RouteProtect access_token={access_token}>

        <Routes>
          <Route path='/' element={<UserLayout />}>
            <Route index element={<HomePage />} />
            <Route path='register' element={<AuthUserPage type='register' />} />
            <Route path='login' element={<AuthUserPage type='login' />} />
            {/* <Route path='members' element={<Members />} /> */}

            {/* user edit profile routes */}
            <Route path='/user/dashboard' element={<User_Dashboard_page type={'dashboard'} />} />
            <Route path='/user/purchase-history' element={<User_Dashboard_page type={'purchase-history'} />} />
            <Route path='/user/gallery' element={<User_Dashboard_page type={'gallery'} />} />
            <Route path='/user/my-interest' element={<User_Dashboard_page type={'my-interest'} />} />
            <Route path='/user/interest-request' element={<User_Dashboard_page type={'interest-request'} />} />

            {/* edit profile  */}
            <Route path='/user/profile/about-me' element={<Profile_edit_page type={'about-me'} />} />
            <Route path='/user/profile/basic-info' element={<Profile_edit_page type={'basic-info'} />} />
            <Route path='/user/profile/photo-change' element={<Profile_edit_page type={'photo-change'} />} />
            <Route path='/user/profile/religion-info' element={<Profile_edit_page type={'religion-info'} />} />
            <Route path='/user/profile/my-location' element={<Profile_edit_page type={'my-location'} />} />
            <Route path='/user/profile/professional-info' element={<Profile_edit_page type={'professional-info'} />} />
            <Route path='/user/profile/about-my-family' element={<Profile_edit_page type={'about-my-family'} />} />
            <Route path='/user/profile/life-style' element={<Profile_edit_page type={'life-style'} />} />
            <Route path='/user/profile/education' element={<Profile_edit_page type={'education'} />} />

            <Route path='/user/profile/religion-preferences' element={<Profile_edit_page type={'religion-preferences'} />} />
            <Route path='/user/profile/professional-preferences' element={<Profile_edit_page type={'professional-preferences'} />} />
            <Route path='/user/profile/location-preferences' element={<Profile_edit_page type={'location-preferences'} />} />
            <Route path='/user/profile/others-preferences' element={<Profile_edit_page type={'others-preferences'} />} />
            
            
            {/* profile */}
            <Route path='/user/member-profile/:username' element={<Member_profile_page />} />

          </Route>
        </Routes>
      </RouteProtect>

      </UserContext.Provider>
    </>
  )
}

export default App
