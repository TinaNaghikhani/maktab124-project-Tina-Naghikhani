import Swiper from '@/components/shared/swiper/swiper'
import React from 'react'

export default function page() {
  return (
    <div className='flex flex-col gap-8 jusify-around items-center'>
      <Swiper/>
      <div className='flex gap-4'>
        <div className='bg-green-200'></div>
        <div className='bg-green-200'></div>
      </div>

    </div>
  )
}
