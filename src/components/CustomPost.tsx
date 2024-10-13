import Avatar from "@/assets/p1.jpeg"
import Image from 'next/image'
import { FaPlus } from 'react-icons/fa'
import { CiHeart } from "react-icons/ci";
import { VscComment } from "react-icons/vsc";
import { BiRepost } from "react-icons/bi";
import { PiTelegramLogo } from "react-icons/pi";

const CustomPost = ({ children, }: any) => {
    return (

        <div className=' w-full overflow-none border-custom-border px-3 py-7 flex flex-row items-start border-b-2 gap-3'>

            <div className='relative flex'>

                <Image src={Avatar} alt='a' className='w-12 h-12 object-cover rounded-full'>

                </Image>
                <FaPlus color='black' className='w-4 h-4 bg-white rounded-full absolute left-8 top-8' />
            </div>
            <div className='flex flex-col items-start  gap-1'>
                <div className='flex flex-row items-center gap-5 '>

                    <h2 className='text-[16px] font-bold-'>Abel Kerima</h2>
                    <p className='text-sm text-gray-500'> 10h</p>
                </div>
                <p className='w-2/3 text-[16px] font-sans '>this post isfor my  one and only mother theresa our mother LONG LIVE</p>

                <div className='w-full flex flex-row gap-1'>

                    <Image src={Avatar} alt='a' className='object-cover  rounded-lg w-[25vh] max-h-[30vh]' />
                    <Image src={Avatar} alt='a' className='object-cover  rounded-lg w-[30vh] max-h-[30vh]' />

                </div>
                <div className='flex flex-row items-center gap-5'>
                    <div>

                        <CiHeart color='gray' className='w-6 h-6' />
                    </div>
                    <div>

                        <VscComment color='gray' className='w-5 h-5' />
                    </div>
                    <div>

                        <BiRepost color='gray' className='w-6 h-6' />
                    </div>
                    <div>

                        <PiTelegramLogo color='gray' className='w-5 h-5' />
                    </div>
                </div>
            </div>
            <p className='text-lg text-gray-500'> ...</p>

        </div>

    )
}

export default CustomPost