import React from 'react'
import Navbar from './Navbar.component'
import { Outlet } from 'react-router-dom'
import Footer from './Footer.component'

const UserLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}

export default UserLayout