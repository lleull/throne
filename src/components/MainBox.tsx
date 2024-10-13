import React from 'react'
import SuggestionPeople from './SuggestionPeople'

const MainBox = ({ children }: any) => {
    return (
        <div className='w-screen h-[100vh] flex flex-row  justify-center overflow-scroll  relative  scrollbar-hide'>
            <div className='w-[65vh] border-custom-border bg-custom-light border-2 rounded-t-3xl border-b-0 mt-5   items-center justify-center  scrollbar-hide'>
                <SuggestionPeople />

                {children}
            </div>
        </div>
    )
}

export default MainBox