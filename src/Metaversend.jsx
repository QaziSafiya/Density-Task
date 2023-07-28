import React from 'react'
import { motion } from 'framer-motion'
import { FaGamepad ,FaLifeRing  } from "react-icons/fa";
const Metaversend = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center p-4'>
    <div className='w-full h-full max-w-[1240px] m-auto md:mt-[160px] mt-[120px]'>
    
    <div className="  md:py-[60px] grid md:grid-cols-2 justify-center items-center ">
    
 
<motion.div  initial={{x:-100}}
     animate={{x:0 }}
     transition={{ type:"spring" , bounce:0.4, duration:3 ,delay:10 }}
className='md:h-[380px] md:w-[300px] md:ml-[220px] md:mt-[80px] rounded-xl md:mb-1 mb-14'>

<h1 className=' md:text-4xl text-2xl font-bold  md:mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600  to-green-500 mb-8 md:ml-[-126px]'>Samantha</h1>
<span className=' md:ml-[-66px] text-transparent bg-clip-text bg-gradient-to-r from-blue-600  to-green-500 text-2xl font-bold'>Founder | Metaversus</span>

<div className="grid md:grid-cols-2 md:mt-[30px] md:ml-[-40px] ">

<div className=' text-white  md:mt-[-1rem] md:ml-[50px] md:w-[280px] '>
 
  <h2 className='font-bold md:ml-[-160px] md:mt-4'>Title A new world</h2>
  <p className='md:mx-2 md:ml-[-19px] flex justify-start mx-5 '>"Methaverse ,With the development of Today Technology , Metaverse is useful for today's work or can be called by 3.0 by using metaverse you can use it as anything</p>
</div>



</div>


</motion.div>

<motion.div  initial={{x:-50}}
     animate={{x:0}}
     transition={{ duration:3 ,delay:10  }}
    className=' md:h-[400px] md:w-[500px] md:mx-14  md:ml-[20px] rounded-3xl'><img  className='md:w-[600px]  md:h-[380px]  w-[400px] h-[200px] md:py-8 rounded-3xl' src="./virtual2.png" alt="" /></motion.div>

   </div>
   <div className='md:mt-[80px]  mt-[100px] flex justify-between md:ml-[340px]'><h1 className=' md:text-5xl text-3xl font-bold  md:mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600  to-green-500 mb-8 md:ml-[-122px]'>Enter the Metaverse</h1> 
   <h1 className='w-[80px] h-[30px] rounded-xl md:flex justify-center  items-center my-2 mx-[30px] py-3 border-2 md:ml-[-1px] hidden '><FaGamepad  size={30} className='ml-2 text-white '/></h1></div>
    </div>
    
  </div>
  )
}

export default Metaversend
