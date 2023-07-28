import React from 'react'
import { motion } from 'framer-motion'
import { FaGamepad ,FaLifeRing  } from "react-icons/fa";
const MetaWorld = () => {
  return (
    <div name="metaverse" className='w-full h-full flex flex-col justify-center items-center p-4'>
      <div className='w-full h-full max-w-[1240px] m-auto md:mt-[20px] mt-[90px]'>
      
      <div className="  md:py-[60px] grid md:grid-cols-2 justify-center items-center ">
      
   
<motion.div  initial={{x:-100}}
       animate={{x:0 }}
       transition={{ type:"spring" , bounce:0.4, duration:3 ,delay:6   }}
 className='md:h-[400px] md:w-[400px] md:ml-[130px]'>
 <div className='flex justify-center items-center text-white md:mb-8 mb:3 md:ml-[-220px]  ml-[-120px]'><h1 className='space md:text-[15px] text-[15px] '>MetaverseWorld</h1></div>
<h1 className=' md:text-4xl text-2xl font-bold  md:mb-3  mt-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600  to-green-500 mb-8 md:ml-[-26px]'>Whats new about the Metaversus?</h1>

<div className="grid md:grid-cols-2 md:mt-[30px] md:ml-[-40px] ">

<div className=' text-white   md:my-7 md:ml-10 md:w-[200px]'>
    <h1 className='w-[40px] h-[40px] rounded-xl  items-center md:my-2 mx-[30px] py-3 bg-gradient-to-r from-blue-600 to-green-500 md:ml-[-1px]  '><FaLifeRing size={20} className='ml-2'/></h1>
    <h2 className='font-bold md:ml-[-60px] md:mt-4'>Title A new world</h2>
    <p className=' md:ml-[-3px] my-2 md:mx-2  mx-2'>In the latest update your eyes is narrow making the world more realistic then ever</p>
</div>

<div className=' text-white  md:my-7 md:ml-[100px] md:w-[200px] '>
    <h1 className='w-[40px] h-[40px] rounded-xl  items-center my-2 mx-[30px] py-3 bg-gradient-to-r from-blue-600 to-green-500 md:ml-[-1px]'><FaGamepad  size={20} className='ml-2'/></h1>
    <h2 className='font-bold md:ml-[-60px]  md:mt-4'>Title More realistic</h2>
    <p className=' md:ml-[-3px] my-2 md:mx-2  mx-2'>In the latest update your eyes is narrow making the world more realistic then ever</p>
</div>

</div>


</motion.div>

<motion.div  initial={{x:-50}}
       animate={{x:0 ,rotate:360}}
       transition={{ duration:3 ,delay:6   }}
      className=' md:h-[500px] md:w-[500px] md:mx-14  md:ml-[80px]'><img  className='md:w-[500px] md:py-8 rounded-full' src="./space2.png" alt="" /></motion.div>

     </div>
      </div>
    </div>
  )
}

export default MetaWorld
