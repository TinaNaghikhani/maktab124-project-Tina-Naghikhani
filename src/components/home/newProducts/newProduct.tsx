'user client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import CartComponent from '@/components/shared/cart/cart';
import Cardcontainer from '@/components/shared/cart/cart';

export default function NewProduct() {

  return (
    <div className='w-5/6 px-4 py-10 justify-items-center border-t-[20px] border-[#606c38] rounded-3xl'>
      <Cardcontainer/>
    </div>
  );
}