import React, { useEffect } from 'react'
import { BeautyImages } from "../../utils/beautyImg"
import { useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
const Main_bar = () => {
    const [nextImage, setnextImage] = useState(1)
    const [nameFound, setnameFound] = useState<string>()

    // const [n]
    const [Text, setText] = useState<string>()









    const array = [
        {
            id: 1,
            name: "leul"
        },
        {
            id: 2,
            name: "mekonnen"
        },
        {
            id: 3,
            name: "abel"
        },
    ]

    const SearchForUser = (Text) => {


        return new Promise((resolve, reject) => {
            let searchTime = 0
            try {

                const finddname = array.find((data) => data.name === Text)
                if (finddname) {
                    searchTime++
                    resolve("Finded name:" + finddname.name)
                    setnameFound("true")
                    console.log("Search time", + searchTime)
                } else {
                    resolve("No names founds")
                    setnameFound("false")


                }
            } catch (error) {
                reject("No names founds")
            }
        })
    }
    const handleSearch = () => {

        console.log(SearchForUser(Text))
    }


    return (
        <div className='flex flex-col  items-center   h-screen'>

            <div className='w-full h-24 bg-gray-800 flex items-center justify-between pl-20'>
                <h1 className='text-3xl text-rose-50'>

                    Make Up Courses
                </h1>
                <div className='flex-2 gap-6 flex pr-20'>

                    {
                        [
                            {
                                name: "Login"
                            }, {
                                name: "Register"
                            }].map((items, i) => {
                                return (
                                    <button className={`pl-5 pr-5 pt-2 pb-2 rounded-xl  text-white font-bold ${i % 2 == 0 ? `bg-gray-400 text-black` : `bg-red-200`} hover:bg-slate-200 hover:text-black cursor-pointer`} key={i}>
                                        {items.name}
                                    </button>
                                )
                            })
                    }
                </div>
            </div>
            <div className='flex flex-row items-center  h-[70vh] overflow-hidden'>

                <p className='w-1/2 text-xl text-white text-left p-20'>
                    <strong className='font-serif text-3xl'>
                        At Markan Beauty School,
                    </strong>  we believe that makeup is not just an art; it’s a powerful way to express creativity, boost confidence, and create beauty. Whether you're a beginner or a seasoned professional, our comprehensive makeup courses offer something for everyone. Our expert instructors provide hands-on training in everything from basic techniques to advanced makeup artistry, using the latest trends and tools in the industry.

                    Join a community of like-minded artists and get the skills you need to excel in the beauty industry. From bridal makeup to special effects, our curriculum is designed to give you the versatility and knowledge to succeed. Unlock your full potential and start your career as a professional makeup artist today!
                    <div className='flex flex-col items-center justify-center'>

                        <input type="text" onChange={((e) => setText(e.target.value))} placeholder='Search' className='border-none rounded pt-2 pb-2 pr-1 pl-1 w-[50%] mb-10 mt-5 text-black' />
                        <button onClick={() => handleSearch()} className='bg-slate-50 text-xl text-black pt-7 pb-7 pl-3 pr-3 rounded-3xl mt-1 w-60'>

                            Explore more
                        </button>
                        {nameFound && <p>Name has successfully search and found its {nameFound}</p>}
                    </div>
                </p>

                <Image className='w-1/2 rounded-l-full' src={BeautyImages[nextImage].image} alt="s" />


            </div>

        </div>
    )
}

export default Main_bar