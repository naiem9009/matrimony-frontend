
export const refresh_page = (bool=false) => {
    return window.location.reload(bool)
} 

export const page_change_with_load  = (route) => {
    return window.location.replace(route)
}