import React, { useContext, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { UserContext } from '../context/User.context'
import { Navigate, useNavigate } from 'react-router-dom'
import { refresh_page } from '../utils/utils.functions'
import HomeImage from "../assets/home1.png"
import bgImage from "../assets/bg1.png"
import bgImage2 from "../assets/bg2.png"
import { Award, CheckCheck, CircleDotDashed, HeartHandshake, MailOpen, Phone, ScanFace, Star, User, UsersRound, Youtube } from 'lucide-react'
import homeFlower from '../assets/homeFlower.png'
import biodataImage from '../assets/biodataImage.png'
import choosePhoto from "../assets/choosePhoto.png"
import welcomeImage from "../assets/welcomeImage.png"
import { gallaryData } from '../../data'

const HomePage = () => {
  
  

  return (
    <div>
      <div className='bg-[#490B22] w-full grid md:grid-cols-2 grid-cols relative min-h-screen overflow-hidden'>
        <div className='max-w-screen-xl mx-auto flex flex-col justify-center gap-4'>
          <h1 className='text-5xl text-white font-bold leading-tight'>Bangladesh Islamic <br />
            <span className='text-[#E33183]'>Matrimony.</span>
          </h1>

          <p className='text-gray-300 text-sm'>when a person gets married he has completed half of his deen, <br /> so let hom fear Allah with regrad to the other half.</p>


          <div className='flex items-center gap-3'>
            <div className='flex relative'>
              <img className='border w-16 h-16 object-cover rounded-full' src="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg" alt="" />
              <img className='border relative -left-4 w-16 h-16 object-cover rounded-full' src="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg" alt="" />
              <img className='border relative -left-8 w-16 h-16 object-cover rounded-full' src="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg" alt="" />
              <img className='border relative -left-12 w-16 h-16 object-cover rounded-full' src="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg" alt="" />
              <img className='border relative -left-16 w-16 h-16 object-cover rounded-full' src="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg" alt="" />
            </div>

            <Star fill='#E33183' size="30px" stroke='none' />
            <div className='flex gap-1'>
              <Star className='rounded bg-[#E33183] p-1' fill='white' size="30px" stroke='none' />
              <Star className='rounded bg-[#E33183] p-1' fill='white' size="30px" stroke='none' />
              <Star className='rounded bg-[#E33183] p-1' fill='white' size="30px" stroke='none' />
              <Star className='rounded bg-[#E33183] p-1' fill='white' size="30px" stroke='none' />
            </div>

            <h1 className='font-xl text-white tracking-widest'>4.5/5</h1>
          </div>


          <img className='w-60' src={homeFlower} alt="" />



        </div>


        <div>
          <img className='z-50 relative w-2/3 mt-10' src={HomeImage} alt="" />
          <img className='absolute top-0 bottom-0 right-0 z-10' src={bgImage} alt="" />

          <img className='absolute top-0 bottom-0 right-0 z-0' src={bgImage2} alt="" />
        </div>
      </div>


      <div className='max-w-screen-xl mx-auto mt-5 p-8 shadow-md'>
        <h1 className='font-bold text-3xl'>Find your Right Match here</h1>

        <div className='mt-5 flex flex-row justify-between gap-5'>
          <select className='w-full h-12 px-3 border rounded-full text-gray-400'>
            <option value="">I'm looking for you</option>
            <option value="">Home</option>
          </select>
          <select className='w-full h-12 px-3 border rounded-full text-gray-400'>
            <option value="">Marital status</option>
            <option value="">Married</option>
            <option value="">Unmarried</option>
          </select>
          <select className='w-full h-12 px-3 border rounded-full text-gray-400'>
            <option value="">Select an address</option>
            <option value="">Khulna</option>
            <option value="">Dhaka</option>
          </select>
          <input className='bg-[#E33183] text-white cursor-pointer w-full h-12 px-3 border rounded-full hover:bg-lime-600 duration-300' type="submit" />
        </div>
      </div>




      <div className='w-full relative min-h-screen'>
        <img className='absolute bottom-0' src={biodataImage} alt="" />
      <div className='max-w-screen-xl mx-auto py-24 flex justify-center flex-col items-center gap-4'>
        <h1 className='text-4xl text-gray-700 text-center font-bold'>
          Create biodata in <span className='text-[#E33183] font-semibold'>BD Islamic Matrimony</span> <br /> completely free
        </h1>

        <img className='w-60' src={homeFlower} alt="" />

        <div className='gap-5 flex flex-row items-center'>
          <div className='flex flex-col items-center p-5 w-60 h-28 gap-2 bg-gray-200 shadow-md'>
            <ScanFace size={'40px'} />
            <h1 className='font-bold text-[#E33183]'>+ Create your Bio Data</h1>
          </div>

          <div className='flex flex-col items-center p-5 w-60 h-28 gap-2 bg-gray-200 shadow-md'>
            <Youtube size={'40px'} />
            <h1 className='font-bold text-[#E33183]'>How to Create Biodata</h1>
          </div>
        </div>



      </div>
        <img className='absolute top-0 right-0 w-60' src={biodataImage} alt="" />

      </div>

      <div className='py-10 bg-[#530F29]'>
      <div className='max-w-screen-xl mx-auto text-center'>
        <h1 className='text-xl text-[#ffc6e1] font-bold'>Quick Access</h1>
        <h1 className='text-4xl text-white font-bold'> How Bangladesh Islamic Matrimony Works </h1>

        <div className='mt-8 flex flex-row justify-between gap-5'>
          <div className='flex rounded-xl flex-col items-center p-5 w-full h-36 gap-2 bg-green-200 shadow-md hover:bg-lime-500 duration-300'>
            <ScanFace size={'40px'} />
            <h1 className='font-bold text-[#300d0d]'>Create Biodata</h1>
            <p className='text-gray-900 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>

          <div className='flex rounded-xl flex-col items-center p-5 w-full h-36 gap-2 bg-green-200 shadow-md hover:bg-lime-500 duration-300'>
            <User size={'40px'} />
            <h1 className='font-bold text-[#300d0d]'>Search Biodata</h1>
            <p className='text-gray-900 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>

          <div className='flex rounded-xl flex-col items-center p-5 w-full h-36 gap-2 bg-green-200 shadow-md hover:bg-lime-500 duration-300'>
            <ScanFace size={'40px'} />
            <h1 className='font-bold text-[#300d0d]'>Contract with gurdians</h1>
            <p className='text-gray-900 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>

          <div className='flex rounded-xl flex-col items-center p-5 w-full h-36 gap-2 bg-green-200 shadow-md hover:bg-lime-500 duration-300'>
            <HeartHandshake size={'40px'} />
            <h1 className='font-bold text-[#300d0d]'>Get married</h1>
            <p className='text-gray-900 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </div>
      </div>
      </div>



      <div className='max-w-screen-xl mx-auto py-10 text-center'>
        <h1 className='text-xl text-[#E33183] font-bold'>Trusted Brand</h1>
        <h1 className='text-4xl font-bold'>Trust by 1600+ Couples</h1>

        <div className='flex justify-center items-center'>
          <img src={homeFlower} alt="" />
        </div>

        <div className="mt-14">
          <div className="flex flex-row justify-between w-full gap-4">
            <div className='w-full p-5 bg-white shadow border relative'>

              <div className="w-14 h-14 absolute -top-8">
                <img className='w-full rounded-xl object-cover h-full relative' src="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg" alt="" />
              </div>


              <p className='mt-10 text-xs text-gray-500 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta, veritatis vero deserunt aut error qui enim labore nihil harum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta.</p>

              <h1 className='text-start font-bold my-2'>Md Naim Hossen</h1>

              <p className='text-start'>Khulna</p>

            </div>

            <div className='w-full p-5 bg-white shadow border relative'>

              <div className="w-14 h-14 absolute -top-8">
                <img className='w-full rounded-xl object-cover h-full relative' src="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg" alt="" />
              </div>


              <p className='mt-10 text-xs text-gray-500 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta, veritatis vero deserunt aut error qui enim labore nihil harum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta.</p>

              <h1 className='text-start font-bold my-2'>Md Naim Hossen</h1>

              <p className='text-start'>Khulna</p>

            </div>


            <div className='w-full p-5 bg-white shadow border relative'>

              <div className="w-14 h-14 absolute -top-8">
                <img className='w-full rounded-xl object-cover h-full relative' src="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg" alt="" />
              </div>


              <p className='mt-10 text-xs text-gray-500 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta, veritatis vero deserunt aut error qui enim labore nihil harum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta.</p>

              <h1 className='text-start font-bold my-2'>Md Naim Hossen</h1>

              <p className='text-start'>Khulna</p>

            </div>

            <div className='w-full p-5 bg-white shadow border relative'>

              <div className="w-14 h-14 absolute -top-8">
                <img className='w-full rounded-xl object-cover h-full relative' src="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg" alt="" />
              </div>


              <p className='mt-10 text-xs text-gray-500 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta, veritatis vero deserunt aut error qui enim labore nihil harum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta.</p>

              <h1 className='text-start font-bold my-2'>Md Naim Hossen</h1>

              <p className='text-start'>Khulna</p>

            </div>



          </div>
        </div>

        <button className='px-14 py-3 bg-[#E33183] rounded-full text-white mt-8 hover:bg-lime-500 duration-300'>
          More customer revews
        </button>
      </div>


      <div className='w-full bg-[#530F29] mt-60 relative flex flex-col justify-center py-36' >
        <div className='max-w-screen-xl mx-auto text-white text-center'>
          <img className='absolute -top-60 left-1/2 -translate-x-1/2' src={choosePhoto} alt="" />

          <h1 className='text-md font-semibold'># 1 WEEDING WEBSITE</h1>
          <h1 className='text-4xl font-bold my-4 tracking-widest'>Why choose us</h1>
          <p className='text-sm text-gray-300'>Most Trusted and premium Matrimony Service in the World</p>
        </div>

        <div className='max-w-screen-xl mx-auto flex flex-row justify-between gap-5 absolute -bottom-28 left-1/2 -translate-x-1/2'>
          <div className='flex flex-col justify-center items-center bg-white p-8 shadow rounded-xl hover:bg-lime-400 duration-300'>
            <Award size={'60px'} color='black' />
            <h1 className='text-md font-bold my-3 text-gray-800'>Genuine profiles</h1>
            <p className='text-sm text-gray-500'>Contact genuine porfiles with 100% verified mobile</p>
          </div>

          <div className='flex flex-col justify-center items-center bg-white p-8 shadow rounded-xl hover:bg-lime-400 duration-300'>
            <Award size={'60px'} color='black' />
            <h1 className='text-md font-bold my-3 text-gray-800'>Genuine profiles</h1>
            <p className='text-sm text-gray-500'>Contact genuine porfiles with 100% verified mobile</p>
          </div>

          <div className='flex flex-col justify-center items-center bg-white p-8 shadow rounded-xl hover:bg-lime-400 duration-300'>
            <Award size={'60px'} color='black' />
            <h1 className='text-md font-bold my-3 text-gray-800'>Genuine profiles</h1>
            <p className='text-sm text-gray-500'>Contact genuine porfiles with 100% verified mobile</p>
          </div>
        </div>

      </div>

      <div className="mt-60 max-w-screen-xl mx-auto">
        <div className='flex flex-row justify-around'>
          <img className='w-1/3' src={welcomeImage} alt="" />

          <div className='w-1/2'>
            <h1 className='text-4xl font-bold'>WELCOME TO  <br /> <span className='text-2xl text-[#E33183]'>WEDDING MATRIMONY</span></h1>

            <p className='text-sm text-gray-500 my-3'>Best wedding matrimony it is a long established fact that a reader will be distracted by the readable content of a page when looking at it’s layout.</p>

            <p className='text-sm text-gray-500'><a href="">Click here</a> to Start you matrimony service now.</p>

            <hr className='my-10' />

            <p className='text-sm text-gray-500'>There are many variations of passages of Lorem ipsum available, but the mojority have suffered alteraction in some from, by injected humor, or randomised word which don’t look even slighty believable.</p>

            <div className='mt-8 flex flex-row gap-5'>
              <div className='flex flex-row gap-2 items-center'>
                <Phone />
                  <span>
                    <p>Cell</p>
                    <h1>+880 179 765 0987</h1>
                  </span>
              </div>

              <div className='flex flex-row gap-2 items-center'>
                <MailOpen />
                  <span>
                    <p>Get Support</p>
                    <h1>bdislamicmatrimony@gmail.com</h1>
                  </span>
              </div>
            </div>
          </div>
        </div>

        <hr className='my-5' />

        <div className='flex flex-row justify-around gap-5'>
          <div className="relative flex flex-col justify-center items-center p-5 after:content-[''] after:absolute after:w-[1px] after:h-28 after:bg-gray-700 after:-right-10">
            <UsersRound size={'50px'} />
            <h1 className='text-sm text-gray-600 my-2'>Total Groom and Bride’s Biodatas</h1>
            <h1 className='text-2xl font-semibold'>17k +</h1>

          </div>

          <div className="relative flex flex-col justify-center items-center p-5 after:content-[''] after:absolute after:w-[0.5px] after:h-28 after:bg-gray-700 after:-right-10">
            <User size={'50px'} />
            <h1 className='text-sm text-gray-600 my-2'>Total Groom  Biodatas</h1>
            <h1 className='text-2xl font-semibold'>7k +</h1>

          </div>

          <div className="relative flex flex-col justify-center items-center p-5 after:content-[''] after:absolute after:w-[0.5px] after:h-28 after:bg-gray-700 after:-right-10">
            <User size={'50px'} />
            <h1 className='text-sm text-gray-600 my-2'>Total Bride’s Biodatas</h1>
            <h1 className='text-2xl font-semibold'>10k +</h1>

          </div>

          <div className="relative flex flex-col justify-center items-center p-5">
            <HeartHandshake size={'50px'}  />
            <h1 className='text-sm text-gray-600 my-2'>Total Successful Marriages</h1>
            <h1 className='text-2xl font-semibold'>2k +</h1>

          </div>

          

        </div>
        <hr className='mt-5' />
      </div>


      <div className='max-w-screen-xl mx-auto py-28'>
        <div className='flex flex-row justify-between items-center'>
          <div>
            <h1 className='text-md font-semibold text-[#E33183]'>Collection</h1>
            <h1 className='text-4xl font-bold'>Photo gallery</h1>

            <img className='mt-3 w-40' src={homeFlower} alt="" />
          </div>

          <button className='px-8 py-3 font-xl rounded-full bg-[#E33183] text-white duration-300 hover:bg-lime-500'>See all</button>
        </div>


        <div className='mt-14 grid md:grid-cols-5 grid-cols gap-5 w-full max-w-screen-xl mx-auto'>
          {gallaryData?.map((image, index) => (
            <img key={index} className='w-60 h-80 object-cover rounded-xl' src={image?.image_url} alt={image?.name} />
          ))}
          


        </div>

      </div>



    </div>
  )
}

export default HomePage