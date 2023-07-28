import React from 'react'

const Slides = () => {
  return (
    <div className='w-full h-full flex justify-center items-center p-4'>
    
      <div className='w-full h-full max-w-[1240px] m-auto  md:mt-[120px] mt-[100px]'>
      <div className='flex justify-center items-center text-white md:mb-8 mb-2'><h1 className='world md:text-[15px] text-[15px]'>TheWorld</h1></div>

      <h1 className=' md:text-4xl font-bold text-2xl md:mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600  to-green-500  ' >Choose the world you want to explore</h1>
        <div className='  md:flex  md:ml-[230px]    md:my-[60px] md:mx-2 my-10 flex-row'>

       
            <div className=' md:w-[200px] md:h-[200px] md:mx-2 mx-[60px] md:hover:rounded-full  '>

            <img className='md:h-full  md:w-full rounded-3xl md:hover:rounded-full  hover:rounded-full w-[200px] h-[200px]' src="./virtual1.png" alt="" />

            <h1 className='font-bold text-white md:mt-[-2rem]  mt-2 md:mb-1 mb-8 '>Metaverse</h1>
            </div>


            
            <div className=' md:w-[200px] md:h-[200px] md:mx-2 mx-[60px] md:hover:rounded-full  '>

            <img className='md:h-full  md:w-full rounded-3xl md:hover:rounded-full  hover:rounded-full w-[200px] h-[200px]' src="./virtual2.png" alt="" />

            <h1 className='font-bold text-white md:mt-[-2rem]  mt-2 md:mb-1 mb-8 '>Metaverse</h1>
            </div>


            <div className=' md:w-[200px] md:h-[200px] md:mx-2 mx-[60px] md:hover:rounded-full  '>

            <img className='md:h-full  md:w-full rounded-3xl md:hover:rounded-full  hover:rounded-full w-[200px] h-[200px]' src="./virtual4.png" alt="" />

            <h1 className='font-bold text-white md:mt-[-2rem]  mt-2 md:mb-1 mb-8 '>Metaverse</h1>
            </div>
            
            <div className=' md:w-[200px] md:h-[200px] md:mx-2 mx-[60px] md:hover:rounded-full  '>

            <img className='md:h-full  md:w-full rounded-3xl md:hover:rounded-full  hover:rounded-full w-[200px] h-[200px]' src="./virtual5.png" alt="" />

            <h1 className='font-bold text-white md:mt-[-2rem]  mt-2 md:mb-1 mb-8 '>Metaverse</h1>
            </div>
            
           
           

            
        </div>
      </div>
    </div>
  )
}

export default Slides
