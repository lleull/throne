"use client"
import CustomPost from '@/components/CustomPost'
import MainBox from '@/components/MainBox'
import Image from 'next/image'
import React, { useState } from 'react'
import Avatar from "@/assets/p1.jpeg"
import Sidebar from '@/components/Sidebar'
import AddNewPost from '@/components/AddPost'
import SearchComponent from '@/components/SearchComponent'
import Profile from '@/components/Profile'
interface Hometype {
  CustomPost: any
}
const Home: React.FC<Hometype> = ({ children }: any) => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div className={`flex flex-row items-center ${isModalOpen ? "blur-sm" : " "}`} >

      <Sidebar setModalOpen={setModalOpen} />
      <AddNewPost isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      <Profile setModalOpen={setModalOpen} />
    </div>
  )
}

export default Home