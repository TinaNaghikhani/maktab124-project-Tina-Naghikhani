import Cardcontainer from '@/components/shared/card/card'
import React from 'react'
import Image from 'next/image';
import boxHeader from '@/assets/Picsart_25-04-23_11-43-14-032.jpg'
export default function FutureProducts() {
  return (
    <div className='w-5/6 px-4 py-10 justify-items-center border-t-[20px] border-[#606c38] rounded-3xl'>
      <Image src={boxHeader} alt={'boxHeader'} className='w-68 -mt-48' />
      <Cardcontainer />
    </div>
  )
}
