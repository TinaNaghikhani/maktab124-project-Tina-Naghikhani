import SwiperComponent from '@/components/shared/swiper/swiper'
import Image from 'next/image'
import React from 'react'
import novel from '@/assets/yagi shenha/8fccceafe6c39e75fc335e3a33e2017e.jpg';
import { FaTrashAlt } from "react-icons/fa";
import CartComponent from '@/components/cart/cart';
import ReceiptComponent from '@/components/cart/receipt';

export default function page() {
  return (
    <div className='w-full flex flex-col gap-8 jusify-around items-center'>
      <SwiperComponent />
      <div className='w-full flex gap-4'>
        <CartComponent />
        <ReceiptComponent/>
      </div>

    </div>
  )
}
