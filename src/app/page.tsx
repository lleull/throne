"use client"
import CustomPost from '@/components/CustomPost'
import MainBox from '@/components/MainBox'
import Image from 'next/image'
import React, { useState } from 'react'
import Avatar from "@/assets/p1.jpeg"
import Sidebar from '@/components/Sidebar'
import AddNewPost from '@/components/AddPost'
interface Hometype {
  CustomPost: any
}
const Home: React.FC<Hometype> = ({ children }: any) => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div className="flex flex-row items-center " >

      <Sidebar setModalOpen={setModalOpen} />
      <AddNewPost isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      <MainBox>
        <div className=' w-full overflow-none  border-custom-border px-3 py-7 flex flex-row items-center border-b-2'>
          {/* Profile owner */}
          <div className='w-full flex items-center gap-2'>

            <Image src={Avatar} alt='a' className='w-12 h-12 object-cover rounded-full' />

            <h2 className='text-gray-500 text-sm'>Whats new?</h2>
          </div>
          <button className='py-1 px-6 border-2 border-custom-border  rounded-3xl justify-end items-end' >
            Post

          </button>
        </div>
        {[1, 2, 3, 4, 5].map((items) => {
          return (
            <CustomPost setModalOpen={setModalOpen} />

          )
        })}
      </MainBox >
    </div>
  )
}

export default Home