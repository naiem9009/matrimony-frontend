import { refresh_page } from "./utils.functions"


export const set_session_storage = (key, value) => {
    sessionStorage.setItem(key, value)
}

export const get_session_storage = (key) => {
    return sessionStorage.getItem(key)
}


export const session_out = () => {
    sessionStorage.clear()
    return setTimeout(() => refresh_page(true), 1000);
}