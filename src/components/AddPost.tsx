import React from 'react'
import Portal from './Portal';
import { RxAvatar } from 'react-icons/rx';
import Image from 'next/image';

import { CiImageOn } from "react-icons/ci";
const AddNewPost = ({ isOpen, onClose }: any) => {
    if (!isOpen) return null;

    return (
        <Portal>

            <div className='w-full h-screen flex items-center justify-center bg-blur absolute top-0 z-10'>
                <div className='w-[62vh] ml-5 py-7   border-custom-border bg-custom-light border-2 rounded-3xl  mt-5   items-center justify-center h-54 '>
                    <div className='w-full px-5 py-2 pb-4 flex flex-row border-b-2 border-custom-border mb-2'>

                        <button onClick={() => onClose(!isOpen)} className='py-1  px-4  text-pretty  rounded-3xl justify-end items-end' >
                            Close

                        </button>
                        <h2 className='w-full ml-40 font-semibold pr-29 '>
                            New Throne
                        </h2>
                    </div>

                    <div className='flex flex-col items-start  gap-1 px-6'>
                        <div className='flex flex-row items-start gap-2'>
                            <div className='flex items-center flex-col'>


                                <RxAvatar color='gray' className='w-9 h-9 object-cover rounded-full' />
                                <div className='w-[2px] rounded-full h-9 bg-gray-600 mt-2' />
                                <RxAvatar color='gray' className='w-4 h-4 object-cover rounded-full mt-2' />

                            </div>
                            <div className='flex flex-col gap-1'>

                                <h2 className='text-[14px] font-bold- '>Abel Kerima</h2>
                                <p className='text-[13px] text-gray-500'>Whats new?</p>

                                <div className='py-2'>
                                    <CiImageOn color='gray' className='w-5 h-5' />
                                </div>

                                <input type="text" className='bg-transparent w-52 placeholder:text-[13px]' placeholder='Add to Throne' />
                            </div>
                        </div>


                    </div>

                    <div className='w-full px-4 py-2 flex items-center justify-between'>
                        <p className='text-[16px] text-gray-500'>Anyone can relpy and react?</p>


                        <button onClick={() => onClose(!isOpen)} className='py-1 border-custom-border border-2  px-4  text-pretty  rounded-3xl justify-end items-end hover:bg-slate-400' >
                            Post

                        </button>
                    </div>
                </div>
            </div>
        </Portal>
    )
}

export default AddNewPost