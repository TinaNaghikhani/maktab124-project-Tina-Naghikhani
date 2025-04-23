import CartComponent from '@/components/shared/cart/cart'
import React from 'react'

export default function FutureProducts() {
  return (
      <div className='w-5/6 px-4 py-10 justify-items-center gap-5 grid grid-cols-3 grid-rows-2 border-t-[20px] border-[#606c38] rounded-3xl'>
      <CartComponent/>
    </div>
  )
}
