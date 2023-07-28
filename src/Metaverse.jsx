import React from 'react'
import { delay, motion } from 'framer-motion'
const Metaverse = () => {
  return (
    <div name="metaverse" className='w-full h-full flex flex-col justify-center items-center p-4'>
      <div className='w-full h-full max-w-[1240px]  md:mt-[20px] mt-[90px]'>
      
      <div className="  md:py-[60px] grid md:grid-cols-2 justify-center items-center  ">
      
      <motion.div  initial={{x:-100}}
       animate={{x:0}}
       transition={{ duration:3 ,delay:4   }}
      className=' md:h-[500px] md:w-[500px] md:mt-[40px] md:ml-[190px]'><img  className='md:w-[500px] md:py-8 md:mt-[60px]' src="./space7.jpg" alt="" /></motion.div>

<motion.div  initial={{x:50}}
       animate={{x:0  }}
       transition={{ type:"spring" , bounce:0.4, duration:3 ,delay:4   }}
 className='md:h-[400px] md:w-[400px] md:ml-[-40px] '>
 <div className='flex justify-center items-center text-white md:mb-[40px] mb-8  md:ml-[-180px] mb:9  ml-[-130px]'><h1 className='space md:text-[15px] text-[15px]'>MetaverseWorld</h1></div>
<h1 className=' md:text-4xl text-2xl font-bold  md:mb-3 mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600  to-green-500'>Get started with few Clicks</h1>

<div className=' text-white grid grid-cols-2 md:my-7 my:6'>
    <h1 className='w-[40px] h-[40px] rounded-xl items-center my-2 mx-3 py-3 bg-gradient-to-r from-blue-600 to-green-500 flex justify-center'>01</h1>
    <p className=' md:ml-[-120px]  ml-[-50px] my-2 md:mx-4 mx-2 flex justify-center items-center'>Find the world that suite that you want to eanter</p>
</div>
<div className=' text-white grid grid-cols-2 md:my-5 my-6'>
    <h1 className='w-[40px] h-[40px]  rounded-xl items-center my-2 mx-3 py-3 bg-gradient-to-r from-blue-600 to-green-500 flex justify-center'>02</h1>
    <p className=' md:ml-[-120px] ml-[-60px] my-2 md:mx-4 '>Enter the world by reading Basmalah to be safe</p>
</div>
<div className=' text-white grid grid-cols-2 md:my-5'>
    <h1 className='w-[40px] h-[40px]  rounded-xl items-center my-2 mx-3 py-3 bg-gradient-to-r from-blue-600 to-green-500 flex justify-center'>03</h1>
    <p className=' md:ml-[-120px] ml-[-60px] my-2 md:mx-4'>No need to beat around the bush,just stay on the gas and have fun</p>
</div>

</motion.div>
     </div>
      </div>
    </div>
  )
}

export default Metaverse
