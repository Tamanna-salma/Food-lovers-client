import React from 'react'
import { Link } from 'react-router'
import { FaFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6";
import food from '../assets/img.png'
const Footer = () => {

  return (
    <div className=' bg-gray-400 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 text-neutral-content rounded p-10 '>

      <div className='flex items-center justify-center py-3 gap-3'>

        <Link
          to="https://www.foodnetwork.com/"
          className="flex items-center gap-2 font-bold"
        >
          <img
            className="w-24 lg:w-32 mix-blend-darken "
            src={food}
            alt="logo"
          />


        </Link>
      </div>

      <div>
        <nav className="flex items-center justify-center text-black text-xl font-bold py-3 gap-3 md:gap-4 ">

          <a className="link link-hover">About</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>


        </nav>
      </div>
      <div>
        <nav>
          <div className="flex items-center justify-center py-3 gap-4">
            <Link to="https://x.com/">
              <FaXTwitter className='text-3xl text-black' />
            </Link >

            <Link to="https://www.youtube.com/" >
              <FaYoutube className='text-2xl text-red-500'></FaYoutube>
            </Link>

            <Link to="https://web.facebook.com/?_rdc=1&_rdr#" >
              <FaFacebook className='text-2xl text-blue-700'></FaFacebook>
            </Link>
          </div>

        </nav>
      </div>

    </div>
  )
}

export default Footer

