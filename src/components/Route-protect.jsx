import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { protect_routes } from '../utils/protect_routes'

const RouteProtect = ({access_token, children}) => {
    const current_path = useLocation()

    useState(() => {
        if (!access_token) {
            protect_routes?.map((route, index) => {
            if (current_path.pathname === route) return window.location.replace('/login')
        })
    }
    }, [])
  return (
    children
  )
}

export default RouteProtect