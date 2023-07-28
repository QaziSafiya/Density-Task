import { useState } from "react";
import React  from 'react'
import {FaBars , FaTimes} from "react-icons/fa";
import { Link } from 'react-scroll';
const Navbar = () => {
    const[state ,setSet]= useState(false)
     const handleclick=()=>{
        setSet(!state)
     }
  return (

    <div className='w-full h-[110px] drop-shadow-md  flex justify-between cursor-pointer items-center px-5 text-white'>

    {/*menu*/}

    <div className='text-white text-2xl font-bold first-letter:text-4xl'>Metaverse</div>

     <ul className='hidden md:flex'>

         <li className=' text-xl  px-3 mx-3 '> <Link  to="home"  smooth={true}  duration={500} >
           Home
         </Link></li>
         <li className=' text-xl px-3 mx-3'><Link  to="about"  smooth={true}  duration={500} >
           About
         </Link></li>
        

         <li className=' text-xl px-3 mx-3'><Link  to="metaverse"  smooth={true}  duration={500} >
        Metaverse
         </Link></li>
         <li className=' text-xl px-3 mx-3'><Link  to="blog"  smooth={true}  duration={500} >
        Blog
         </Link></li>

     </ul>


     {/*hamburger*/}

     <div  onClick={handleclick} className='md:hidden z-10'>
     {!state? <FaBars/> : <FaTimes/> }</div>



  {/*Mobile menue*/}


   <ul className={!state ? 'hidden' :'absolute top-0 left-0 w-full h-screen flex flex-col bg-black justify-center items-center '}>
         <li className='py-6 text-2xl'><Link  to="home"  smooth={true}  duration={500} >
           Home
         </Link></li>
         <li className='py-6 text-2xl'><Link  to="about"  smooth={true}  duration={500} >
           About
         </Link></li>
         <li className='py-6 text-2xl'><Link  to="support"  smooth={true}  duration={500} >
          Blog
         </Link></li>
         <li className='py-6 text-2xl'><Link  to="notifications"  smooth={true}  duration={500} >
          Metaverse
         </Link></li>


     </ul>
 </div>
  )
}

export default Navbar