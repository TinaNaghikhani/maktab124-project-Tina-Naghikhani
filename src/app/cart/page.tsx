import Swiper from '@/components/shared/swiper/swiper'
import React from 'react'

export default function page() {
  return (
    <div className='flex flex-col gap-8 jusify-around items-center'>
      <Swiper/>
      <div className='flex gap-4'>
        <div className='bg-pink-200 border border-spot border-white'>
          <span></span>
          <div>
            <span></span>
            <span></span>

          </div>
          <div>
            <div>
              <button>+</button>
              <span></span>
              <button>-</button>
            </div>
            <p></p>
          </div>
        </div>
        <div className='bg-green-200'></div>
      </div>

    </div>
  )
}
