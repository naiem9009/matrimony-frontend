

import { Facebook, Instagram, Linkedin, Mail, Twitter, Youtube } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#852274]'>
        <div className='max-w-screen-xl mx-auto py-16 flex flex-row justify-between items-start'>
            <div className='text-white'>
                <h1 className='text-2xl font-bold mb-3'>GET IN TOUCH</h1>
                <p className='text-sm text-gray-300'>Address: Khulna Bangladesh</p>
                <p className='text-sm text-gray-300'>Phone: +880 017 344 8732</p>
                <p className='text-sm text-gray-300'>Email: islamicmetromony.com</p>
            </div>

            <div className='text-white'>
                <h1 className='text-2xl font-bold mb-3'>Resources</h1>
                <p className='text-sm text-gray-300'>Home</p>
                <p className='text-sm text-gray-300'>About Us</p>
                <p className='text-sm text-gray-300'>Guide</p>
                <p className='text-sm text-gray-300'>Contact</p>
            </div>

            <div className='text-white'>
                <h1 className='text-2xl font-bold mb-3'>Support</h1>
                <p className='text-sm text-gray-300'>Help Center</p>
                <p className='text-sm text-gray-300'>Technical Support</p>
                <p className='text-sm text-gray-300'>Feedback and Support</p>
                <p className='text-sm text-gray-300'>Our COVID-19 Response </p>
                <p className='text-sm text-gray-300'>Analytics and Reporting</p>
            </div>

            <div className='text-white'>
                <h1 className='text-2xl font-bold mb-3'>Community Integration</h1>
                <div className='flex flex-row gap-3'>
                    <Facebook />
                    <Mail />
                    <Instagram />
                    <Linkedin />
                    <Twitter />
                    <Youtube />
                    
                </div>
            </div>
        </div>

        
        <div className='border-t border-gray-500 py-5 text-white'>
            <div className='max-w-screen-xl mx-auto flex flex-row justify-between'>
                <div className='flex flex-row gap-3'>
                <h1>@ 2023-2024 OrdhekDeen.com</h1>
                </div>
                <p>Developer By <a href="#">Naim</a></p>
                {/* <h1>@ 2023-2024 OrdhekDeen.com</h1> */}
            </div>
        </div>
    </div>
  )
}

export default Footer