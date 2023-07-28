import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
const Blog = () => {
    const blog=[
        {
            id:1,
            img:"./virtual2.png",
            title:"The launch of Metaverse makes Elon Musk Keta Ketir",
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. "
        },
        {
            id:2,
            img:"./Blog2.png",
            title:"The launch of Metaverse makes Elon Musk Keta Ketir",
            para:"Lorem ipsum dolor sit nam ex, soluta labore dolorum"
        },
        {
            id:3,
            img:"./Blog3.png",
            title:"The launch of Metaverse makes Elon Musk Keta Ketir",
            para:"Lorem ipsum nam ex, soluta labore dolorum"
        },
        {
            id:4,
            img:"./Blog1.png",
            title:"The launch of Metaverse makes Elon Musk Keta Ketir",
            para:"Lorem ipsum nam ex, soluta labore dolorum"
        },


    ]
  return (
    <div name="blog" className='w-full h-full  flex justify-center items-center p-4 '>
   
      <div className='w-full h-full max-w-[1240px] m-auto border- md:mt-[280px] mt-[180px]'>
      <div className='flex justify-center items-center text-white md:mb-8 mb:8 md:ml-[-100px]  ml-[-40px]'><h1 className='blog md:text-[15px] text-[15px] mb-3 '>TrendingBlog</h1></div>
      <div>
   <h1 className=' md:text-4xl text-2xl md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600  to-green-500 font-bold mb-9'>Insight about metaverse</h1>
   </div>
       
{
    blog.map((ele)=>{
        return(
            <div>
            <div className='  grid md:grid-cols-3  justify-center items-center md:mt-1 mt-14 '>
            <div className=' md:w-[200px] md:h-[180px] md:my-10 md:ml-[220px] ml:[70px] rounded-xl'><img className='md:w-[200px] md:h-[180px] w-[180px] h-[180px] rounded-xl ml-[50px] ' src={ele.img} alt="" /></div>
<div className='  md:ml-[120px] md:my-[12px]   '> 
<h1 className=' md:text-2xl md:mb-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-600  to-green-500 font-bold my-5' >{ele.title}</h1>
<p className='text-white md:mt-1 mt-5'>{ele.para}</p></div>
<div className='md:w-[50px] md:h-[50px] w-[40px] h-[40px] md:ml-[80px] rounded-full border-2 items-center md:flex hidden'><FaArrowRight className='text-white md:ml-[12px]' size={20}/></div>
            </div>
</div>
        )
    })
}
        </div>
      
    </div>
  )
}

export default Blog
