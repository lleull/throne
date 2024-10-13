import React, { useState } from 'react'
import MainBox from './MainBox'
import Ava from "@/assets/pddd.jpeg"

import Image from 'next/image'
import { BsInstagram } from 'react-icons/bs'
import CustomPost from './CustomPost'
const Profile = ({ setModalOpen }: any) => {
    const [isThreadProfile, setisThreadProfile] = useState(true)
    return (
        <MainBox>
            <div className='flex flex-col item-center gap-2 p-6'>


                <div className='flex flex-row item-start  gap-4 justify-between w-full '>
                    <div className='flex flex-col items-start gap-1'>
                        <h2 className='text-lg font-bold font-sans'>

                            Leul mekonnen
                        </h2> <h2 className='text-sm text-gray-300 mb-2'>

                            11Abeel
                        </h2>

                    </div>

                    <Image src={Ava} alt='a' className='w-20 h-20 rounded-full' />

                </div>

                <div className='flex flex-col '>
                    <h2>Scorpio</h2>

                    <div className='flex flex-row items-center justify-between mt-10'>
                        <h2 className='text-gray-500 font-extralight'>78 Followers</h2>
                        <BsInstagram className='w-8 h-8 ' color='white' />

                    </div>
                    <button className='w-full py-1 mt-3 rounded-2xl px-5 items-center justify-center flex border-2 border-custom-border'>
                        Edit profile
                    </button>


                </div>



            </div>
            <div className='flex w-full flex-col'>
                <div className='w-full flex flex-row flex-1 pb-2'>
                    <h2 onClick={() => setisThreadProfile(true)} className={` cursor-pointer flex w-1/2 items-center justify-center border-custom-border border-b-2 ${isThreadProfile ? "font-bold border-gray-400 " : ""}`}>
                        Thrones
                    </h2>
                    <h2 onClick={() => setisThreadProfile(false)} className={` cursor-pointer  flex w-1/2 items-center justify-center border-custom-border border-b-2 ${!isThreadProfile ? "font-bold border-gray-400 " : ""}`}>
                        Repost
                    </h2>


                </div>
                <div className=' w-full overflow-none  border-custom-border px-3 py-7 flex flex-row items-center border-b-2'>
                    {/* Profile owner */}
                    <div className='w-full flex items-center gap-2'>

                        <Image src={Ava} alt='a' className='w-9 h-9 object-cover rounded-full' />

                        <h2 className='text-gray-500 text-sm'>Whats new?</h2>
                    </div>
                    <button onClick={() => setModalOpen(true)} className='py-1 px-6 border-2 border-custom-border  rounded-3xl justify-end items-end hover:bg-slate-400' >
                        Post

                    </button>
                </div>


            </div>
            <CustomPost />
        </MainBox>
    )
}

export default Profile