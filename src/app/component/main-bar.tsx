import React, { useEffect } from 'react'
import { BeautyImages } from "../../utils/beautyImg"
import { useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
const Main_bar = () => {
    const [nextImage, setnextImage] = useState(1)
    const [markertData, setMarketData] = useState()

    const options = {
        method: "GET",
        mode: "nocors",
        url: "https://coinranking1.p.rapidapi.com/coins",
        params: {
            referenceCurrencyUuid: "yhjMzLPhuIDl",
            timePeriod: "24h",
            "tiers[0]": "1",
            orderBy: "marketCap",
            orderDirection: "desc",
            limit: "50",
            offset: "0",
        },
        headers: {
            "X-RapidAPI-Key": "36e79fec5bmsh0641910c952cbeep1afb1ejsn132bcc2ba3cc",
            "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
    };

    useEffect(() => {
        axios.request(options).then((response) => {
            console.log("response: " + response)
        })
        setTimeout(() => {
            if (BeautyImages.length = nextImage) {

                setnextImage(1)
            } else {
                setnextImage(nextImage + 1)

            }
        }, 2);



    }, [nextImage])

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
                </p>

                <Image className='w-1/2 rounded-l-full' src={BeautyImages[nextImage].image} alt="s" />

            </div>
            <button className='bg-slate-50 text-2xl pt-7 pb-7 pl-3 pr-3 rounded-3xl mt-1'>
                Explore more
            </button>

        </div>
    )
}

export default Main_bar