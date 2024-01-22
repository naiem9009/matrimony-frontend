
import axios from 'axios'
import React, { useContext, useState } from 'react'
import { UserContext } from '../context/User.context'

const FetchUser = (access_token, username) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchUser = () => {
        setLoading(true)
        axios.get(`${import.meta.env.VITE_SERVER_URL}/user/${username}`, {
            headers: {
                'Authorization': `Bearer ${access_token}` 
            }
        }).then(({data}) => {
            setLoading(false)
            setUser(data);
        }).catch(() => setLoading(false))
    }

    useState(() => {
        fetchUser()

    }, [username])
  return {user, loading}
}

export default FetchUser 