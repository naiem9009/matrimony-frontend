import axios from "axios";
import { set_session_storage } from "./SessionStorage";


export const AuthQuery = async (route, formData, cb) => {
    axios.post(`${import.meta.env.VITE_SERVER_URL}${route}`, formData).then(({data}) => {
        
        set_session_storage("user", JSON.stringify(data?.user))
        cb(data)
    }).catch(({response}) => {
        cb(response?.data)
    })
    
}

