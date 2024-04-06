import React from 'react'
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className='flex justify-between w-[1240px]
    pt-4 px-8 pb-4'>
        <div className=''>
        <BiSearch className='w-[30px] h-[30px] top-[42px] left-[148px] mx-4'/>
        </div>
        <div className='w-[44px] h-[44px]  rounded-full'>
        <img className='rounded-full' src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"  alt="imgicon"/>
        </div>
        
    </div>
  )
}

export default Navbar