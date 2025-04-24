'user client'
import React from 'react';
import Cardcontainer from '@/components/shared/cart/cart';
import Image from 'next/image';
import boxHeader from '@/assets/Picsart_25-04-23_11-42-18-204.jpg'

export default function NewProduct() {

  return (
    <div className='w-5/6 px-4 py-10 justify-items-center border-t-[20px] border-[#606c38] rounded-3xl'>
      <Image src={boxHeader} alt={'boxHeader'} className='w-68 -mt-48' />
      <Cardcontainer/>
    </div>
  );
}