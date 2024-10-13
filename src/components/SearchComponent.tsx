import React from 'react'
import MainBox from './MainBox'
import { GoSearch } from 'react-icons/go'
import Ava from "@/assets/pddd.jpeg"
import Image from 'next/image'
const SearchComponent = () => {
    return (
        <MainBox>
            <div className='px-5 py-5'>
                <div className='w-full  bg-gray-800 border-2 border-custom-border h-10 rounded-lg flex flex-row pl-5 items-center gap-5'>
                    <GoSearch color='gray' className='w-5 h-5 mt-1' />
                    <input type="text" className='bg-transparent w-52 placeholder:text-[16px] ' placeholder='Search' />

                </div>
            </div>
            <div className='px-5 py-5'>
                <h2 className='text-gray-300 font-sans'>Follow Suggestions</h2>
            </div>

            <div className='flex flex-row item-start pl-5 gap-2'>


                <Image src={Ava} alt='a' className='w-10 h-10 rounded-full' />
                <div className='flex flex-row item-start pl-2 gap-4 justify-between w-full border-b-2 border-custom-border items-center  pb-5'>
                    <div className='flex flex-col items-start gap-1'>
                        <h2 className='text-sm font-bold font-sans'>

                            Abel_erhan
                        </h2> <h2 className='text-sm text-gray-600 mb-2'>

                            11Abeel
                        </h2>
                        <h2 className='text-sm font-semibold font-sans'>

                            100 Followers
                        </h2>
                    </div>

                    <button className=' border-custom-border border-2 flex mr-5  rounded-3xl justify-end items-end hover:bg-slate-400 px-6 py-2' >
                        Follow

                    </button>
                </div>

            </div>
        </MainBox>
    )
}

export default SearchComponent