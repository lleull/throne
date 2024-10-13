import React from 'react'
import Portal from './Portal';

const AddThrone = ({ isOpen, onClose }: any) => {
    if (!isOpen) return null;

    return (
        <Portal>

            <div className='w-full h-screen flex items-center justify-center bg-blu absolute top-0 z-10'>
                <div className='w-[40vh]  border-custom-border bg-custom-light border-2 rounded-t-3xl  mt-5   items-center justify-center h-54 '>
                    <button onClick={() => onClose(!isOpen)} className='py-1 px-6 border-2 border-custom-border  rounded-3xl justify-end items-end' >
                        Close

                    </button>
                </div>
            </div>
        </Portal>
    )
}

export default AddThrone