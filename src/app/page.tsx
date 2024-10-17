"use client"

import React, { useEffect, useState } from 'react'
import img1 from "@/assets/p1.jpeg"
import img2 from "@/assets/p2.jpeg"
import img3 from "@/assets/p3.jpeg"
import img4 from "@/assets/pd.jpeg"
import img5 from "@/assets/pddd.jpeg"
import img6 from "@/assets/pdd.jpeg"


import { useSelector, UseSelector } from 'react-redux'
import Image from 'next/image'
interface Hometype {
  CustomPost: any
}
const Home: React.FC<Hometype> = ({ children }: any) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className='list'>
      <Image src={img1} className='image' alt='hello' />
      <Image src={img2} className='image' alt='hello' />
      <Image src={img3} className='image' alt='hello' />
      <Image src={img4} className='image' alt='hello' />
      <Image src={img5} className='image' alt='hello' />
      <Image src={img6} className='image' alt='hello' />
      {/* <Image src={img1/} className='image' alt='hello' /> */}

    </div>
  )
}

export default Home