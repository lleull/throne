import React from 'react'
import { BeautyImages } from "../../utils/beautyImg"
import { useState } from 'react'
import Image from 'next/image'
const Main_bar = () => {
    const [nextImage, setnextImage] = useState(1)
    return (
        <div className='flex flex-col  items-center   h-screen'>
            <div className='w-full h-24 bg-red-200 flex items-center justify-between pl-20'>
                <h1 className='text-3xl'>

                    Make Up
                </h1>
                <div className='flex-2 gap-6 flex pr-20'>

                    {
                        [{
                            name: "decorations"
                        },
                        {
                            name: "MakeUps"
                        }, {
                            name: "HumanHair"
                        }].map((items, i) => {
                            return (
                                <button className={`pl-5 pr-5 pt-2 pb-2 rounded-xl  text-white font-bold ${i % 2 == 0 ? `bg-blue-400 text-black` : `bg-red-900`} hover:bg-slate-400 cursor-pointer`} key={i}>
                                    {items.name}
                                </button>
                            )
                        })
                    }
                </div>
            </div>
            <div>

                <p className='w-1/2 text-2xl text-white text-left p-20 border-2 border-red-200'>
                    <strong className='font-serif text-3xl'>
                        At Markan Beauty School,
                    </strong>  we believe that makeup is not just an art; it’s a powerful way to express creativity, boost confidence, and create beauty. Whether you're a beginner or a seasoned professional, our comprehensive makeup courses offer something for everyone. Our expert instructors provide hands-on training in everything from basic techniques to advanced makeup artistry, using the latest trends and tools in the industry.

                    Join a community of like-minded artists and get the skills you need to excel in the beauty industry. From bridal makeup to special effects, our curriculum is designed to give you the versatility and knowledge to succeed. Unlock your full potential and start your career as a professional makeup artist today!
                </p>

                <Image src={BeautyImages[nextImage].image} alt="s" />

            </div>
            <button className='bg-slate-50 text-2xl pt-7 pb-7 pl-10 pr-10 rounded-3xl mt-24'>
                Sign Up
            </button>

        </div>
    )
}

export default Main_bar