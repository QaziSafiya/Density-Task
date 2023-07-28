
import React from 'react'
import { useState } from "react";
import { FaAngleRight, FaAngleLeft   } from "react-icons/fa6";
const Crousel = () => {
    const slides =[
        {
            url:"https://www.aatmastudio.com/wp-content/uploads/2021/07/metaverse-1000x600.jpg"
        },

        {
url:"https://www.itp.net/cloud/2022/03/14/metaverse-1024x683-1.jpg"
        },
        {
            url:"https://cdn-images-1.medium.com/v2/resize:fit:2000/1*YW7OUESS4pZFDxIb5wVg-w.jpeg"
        },
     {
        url:"https://theapocalypsedaddy.com/wp-content/uploads/2021/06/problems-metaverse.jpg"
     },

     {
        url:"https://i.pinimg.com/736x/c9/8d/c4/c98dc4b17f5cf28ea48bbfc9a482bb95--augmented-reality.jpg"
     },
     {
        url:"https://www.itp.net/cloud/2022/03/14/metaverse-1024x683-1.jpg"
     }
     
    ]



    const[currentindex ,setCurrentindex]=useState(0)

    const prevslide=()=>{
const isfirstslide =currentindex===0;
const newindex = isfirstslide? slides.length-1 :currentindex-1;
setCurrentindex(newindex)
    };

    const nextslide=()=>{
      
const lastslide =currentindex ===slides.length-1;
const previndex = lastslide ? 0 :currentindex+1;
setCurrentindex(previndex)
    }
  return (
    <div className=' max-w-[1240px] h-[600px] m-auto py-16 relative px-4'>

    <div className="md:text-3xl text-blue-500">Choose your world</div>
     <div className=' h-[400px] w-[600px] md:ml-[360px]'>
     <div style={{ backgroundImage:`url(${slides[currentindex].url})`}} className='w-full  h-full rounded-xl bg-center bg-cover duration-400'></div>

     {/*right*/}
     
     <div className='absolute -translate-x-0 translate-y-[-380%]  text-2xl rounded-full p-2 bg-white/20 text-white cursor-pointer md:ml-[450px] '><FaAngleRight onClick={nextslide} size={30}/></div>

     {/*left*/}

     <div className='absolute -translate-x-0 translate-y-[-380%]   text-2xl rounded-full p-2 bg-white/20 text-white cursor-pointer '><FaAngleLeft onClick={prevslide} size={30}/></div>
     </div>
    </div>
  )
}







export default Crousel
