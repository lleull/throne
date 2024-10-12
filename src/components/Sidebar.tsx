import React from 'react'
import { GoHome } from "react-icons/go";
import { GoSearch } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { LuPin } from "react-icons/lu";
import { FaGripLines } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
function Sidebar() {
    return (
        <div className="h-[100vh] px-5 flex justify-between  flex-col pb-9 pl-15">
            <h1 className="text-4xl font-sans text-white ">@</h1>

            <div className='flex-col gap-6 flex mb-20'>
                <GoHomeFill color='white' className='w-7 h-7' />
                <GoSearch color='gray' className='w-7 h-7' />
                <div className='py-2 px-2   rounded-xl  bg-gray-800'>

                    <FaPlus color='gray' className='w-7 h-7' />
                </div>
                <FaRegHeart color='gray' className='w-7 h-7' />
                <CiUser color='gray' className='w-7 h-7' />




            </div>
            <div className='flex-col'>
                <LuPin color='gray' className='w-7 h-7' />
                <FaGripLines color='gray' className='w-7 h-7' />

            </div>
        </div>

    )
}

export default Sidebar