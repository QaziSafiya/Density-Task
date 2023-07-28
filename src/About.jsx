import React, { useEffect, useRef, useState } from 'react'
import { delay, motion ,useInView } from 'framer-motion'
const About = () => {
  const ref =useRef(null)
  const isView = useInView(ref ,{once:true})
  useEffect(()=>{

  },[isView])
  return (
  
    <div ref={ref} name="home" className='w-full h-full flex justify-center items-center p-4 '>

   
      <motion.div variants={{hidden:{opacity:0 , y:75},visible:{opacity:1 ,y:0}}} 
      initial="hidden" 
      animate="visible"
      transition={{dalay:0.25 , duration:2}}
      
      className='w-full max-w-[1240px] h-[670px]  md:mt-[90px] mt-[120px] '>
      <div className=''>
        <h1 className=' md:text-6xl text-4xl md:mb-3  text-transparent bg-clip-text bg-gradient-to-r from-blue-600  to-green-500 font-bold'>METAVERSE</h1>
        <h1 className=' md:text-6xl  text-4xl  md:mt-[1rem] text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 font-bold '>MA<span className='w-[30px] font-bold md:text-7xl'>D</span>NESS</h1>
    </div>
        <div  className='md:w-[800px] md:h-[400px] md:mx-[210px] rounded-l-3xl bg-gray-800 '><img className='  md:h-[400px] w-full  md:rounded-tl-3xl  ' src="./img1.jpg" alt="" />
 </div>
      </motion.div>
    </div>
  )
}

export default About
