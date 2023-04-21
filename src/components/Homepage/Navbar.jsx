import React from 'react'
import { Typography } from '@material-tailwind/react'
import careerocityLogo  from '../../assets/images/careerocityLogo.jpeg';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav class=" fixed top-0 left-0 w-full z-50">
        <div class="container mx-auto px-4">
          <div class="flex items-center justify-between py-3">
              <img src={careerocityLogo} alt="Careerocity Logo" class="h-10 mr-3 sm:h-12 rounded-full"/>
              <Typography className='flex items-center flex-grow'>
            <span class="self-center text-white text-4xl font-bold whitespace-nowrap ">Careerocity</span>     
            </Typography>
           

    <div class="hidden md:block mr-10" id="navbar-sticky">
      <ul class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-lg font-medium">
        <li>
          <Link to="/" className=" text-decoration-none list-none flex-col justify-end items-center flex-1 text-white block px-3 py-2 rounded-lg hover:bg-gray-700  md:hover:text-white ">Home</Link>
        </li>
        <li>
          <Link to="/about" class="text-decoration-none list-none flex-col justify-end items-center flex-1 text-white block px-3 py-2 rounded-lg hover:bg-gray-700  md:hover:text-white ">About</Link>
        </li>
        <li>
          <Link to="/login" class="text-decoration-none list-none flex-col justify-end items-center flex-1 text-white block px-3 py-2 rounded-lg hover:bg-gray-700  md:hover:text-white">Login</Link>
        </li>
        <li>
          <Link to="/signup" class="text-decoration-none list-none flex-col justify-end items-center flex-1 text-white block px-3 py-2 rounded-lg hover:bg-gray-700  md:hover:text-white ">Sign Up</Link>
        </li>
      </ul>
    </div>
    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-lg px-5 ml-20 py-2.5 md:text-xl md:px-7 md:py-3">
    <Link to='/form' className='text-white'>Get Started</Link>
        
      </button>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-600">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
  </div>
  </div>
</nav>
  )
}

export default Navbar