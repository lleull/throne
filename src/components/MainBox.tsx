import React from 'react'

const MainBox = ({ children }: any) => {
    return (
        <div className='w-full flex  h-[95vh] items-center justify-center'>
            <div className='w-[65vh] border-custom-border bg-custom-light border-2 rounded-3xl h-[95vh] items-center justify-center '>

                {children}
            </div>
        </div>
    )
}

export default MainBox