import React, { useContext } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { Link, Navigate } from 'react-router-dom'
import { AuthQuery } from '../utils/AuthQuery'
import { page_change_with_load } from '../utils/utils.functions'
import { UserContext } from '../context/User.context'



const AuthUserPage = ({type}) => {

    const {authUser: {access_token}} = useContext(UserContext)


    if (access_token) return <Navigate to='/' />

    



    const LoginRegisterHandle = (ev) => {

        const serverRoute = type === 'register' ? '/auth/register' : '/auth/login'
        ev.preventDefault()

        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email

        const form = new FormData(formElement)
    
        let formData = {}
    
        for (let [key, value] of form.entries()) {
          formData[key] = value
        }
    
        const {username, password, email} = formData;

        if (!email) return toast.error('Email must be required')
        if (!emailRegex.test(email)) return toast.error('Email is invalid')
        if (!password) return toast.error('Password must be required')
        
        if (type === 'register') {
            if (!username) return toast.error('Username must be required')
        }
        
    
        const loginLoading = toast.loading('wait a moment ...')

        AuthQuery(serverRoute, formData, data => {
            if (!data?.success) {
              toast.dismiss(loginLoading);
              return toast.error(data?.error)
            }
            toast.dismiss(loginLoading);
            toast.success(data?.message)
      
            return setTimeout(() => page_change_with_load('/'), 2000)
      
        })
    }





  return (

    <div className="flex min-h-screen">
        <div className="flex flex-row w-full">

            <Toaster />


            <div className='hidden lg:flex flex-col justify-between bg-[#ffe85c] lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg'>
                <div className='space-y-5'>
                <h1 className="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold">Enter your account and discover new
                    experiences</h1>

                    {type === 'register' ? (
                        <>
                            <p className="text-lg">Are you already member?</p>
                            <Link to='/login'
                            className="inline-block flex-none px-4 py-3 border-2 rounded-lg font-medium border-black bg-black text-white">Login Here</Link>
                        </>
                    ) : (
                        <>

                            <p className="text-lg">Are you not a member?</p>
                            <Link to='/register'
                            className="inline-block flex-none px-4 py-3 border-2 rounded-lg font-medium border-black bg-black text-white">Register Here</Link>
                        
                        </>
                    )}

                </div>
            
            </div>


            <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
                <div className="flex lg:hidden justify-between items-center w-full py-4">
                <div className="flex items-center space-x-2">
                    
                    {type === 'register' ? (
                        <>
                            <span>Not a member? </span>
                            <Link to="/register" className="underline font-medium text-[#070eff]">
                                Sign up now
                            </Link>
                        </>

                    ) : (
                        <>
                            <span>Are you already member? </span>
                            <Link to="/login" className="underline font-medium text-[#070eff]">
                                Login Now
                            </Link>
                        
                        </>

                    )}
                </div>
                </div>

                <div className="flex flex-1 flex-col  justify-center space-y-5 max-w-md">
                    <div className="flex flex-col space-y-2 text-center">
                        {type === 'register' ? (
                            <h2 className="text-3xl md:text-4xl font-bold">Register Now</h2>
                        ) : (
                            <h2 className="text-3xl md:text-4xl font-bold">Sign in to account</h2>
                        )}
                        <p className="text-md md:text-xl">Sign up or log in to place the order, password require!</p>
                    </div>
                    
                    <form onSubmit={LoginRegisterHandle} className="flex flex-col max-w-md space-y-5" id='formElement'>

                        {type === 'register' && (
                            <>
                                <input name='username' type="username" placeholder="Username"
                                className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal" />
                            </>
                        )}


                        <input name='email' type="email" placeholder="Email"
                        className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal" />

                        <input name='password' type="password" placeholder="Password"
                        className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal" />


                        {type === 'register' ? (
                            <button type='submit' className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">Register</button>
                        ) : (
                            <button type='submit' className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">Login</button>
                        )}


                        <div className="flex justify-center items-center">
                        <span className="w-full border border-black"></span>
                        <span className="px-4">Or</span>
                        <span className="w-full border border-black"></span>
                        </div>

                        
                    </form>

                    <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative hover:bg-gray-700 duration-200 hover:text-white">
                            <span className="absolute left-4">
                                <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <path fill="#EA4335 " d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"/>
                                <path fill="#34A853" d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"/>
                                <path fill="#4A90E2" d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"/>
                                <path fill="#FBBC05" d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"/>
                            </svg>
                            </span>
                            <span>Sign in with Google</span>
                        </button>
                </div>

            </div>
        </div>

    </div>

  )
}

export default AuthUserPage