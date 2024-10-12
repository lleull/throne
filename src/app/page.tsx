import CustomPost from '@/components/CustomPost'
import MainBox from '@/components/MainBox'
import React from 'react'
interface Hometype {
  CustomPost: any
}
const Home: React.FC<Hometype> = ({ children }: any) => {
  return (
    <MainBox>
      <div className=' w-full overflow-none border-custom-border px-3 py-7 flex flex-row items-center border-b-2'>
        {/* Profile owner */}
        <div className='w-full flex items-center gap-2'>

          <div className='w-10 h-10 bg-slate-500 rounded-full'>
          </div>
          <h2 className='text-gray-500 text-sm'>Whats new?</h2>
        </div>
        <button className='py-1 px-6 border-2 border-custom-border  rounded-3xl justify-end items-end' >
          Post

        </button>
      </div>
      {[1, 2, 3, 4, 5].map((items) => {
        return (
          <CustomPost />

        )
      })}
    </MainBox >
  )
}

export default Home