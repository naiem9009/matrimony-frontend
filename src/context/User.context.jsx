import React, { createContext, useState } from 'react'
import { get_session_storage } from '../utils/SessionStorage'

export const UserContext = createContext({})



const AuthUserContext = () => {
    const [authUser, setAuthUser] = useState({})
    const [loading, setLoading] = useState(true)

    useState(() => {
        const lookInSession = get_session_storage('user')

        lookInSession ? setAuthUser(JSON.parse(lookInSession)) : setAuthUser({access_token: null})

        setLoading(false)
        

    }, [])
    

    
  return {authUser, setAuthUser, loading}
}

export default AuthUserContext