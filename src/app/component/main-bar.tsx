import React from 'react'

const Main_bar = () => {
    return (
        <div className='w-full flex items-start justify-center  h-screen'>
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
        </div>
    )
}

export default Main_bar