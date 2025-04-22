import React from 'react'
import yagiHeader from '@/assets/yaghiheader.png'
import book from '@/assets/yagi shenha/b6dca1e50653da04f51fcfcacfa29016.png'
import Image from 'next/image';
import { singlePageLoc } from "@/localization/localization";
export default function page() {
  return (
    <div className='p-4 flex flex-col gap-10'>
      <Image
        src={yagiHeader}
        alt="تصویر"
      />
      <div className='flex gap-8'>
        <div>
          <Image
            src={book}
            alt="تصویر"
            className='w-80 h-80'
          />
        </div>
        <div className='w-1/2 p-4 flex flex-col gap-2'>
          <p className='text-4xl font-bold italic text-[#7F4F24] m-4'>یاغی شن ها 1</p>
          <hr className='w-full mx-10 h-1 bg-[#7F4F24] border-0 ' />
          <div className='flex flex-col gap-4'>
            <span className='text-[#7F4F24] font-semibold'><span className='font-bold text-2xl text-[#414833]'>{singlePageLoc.athur} </span>کایرا کاس</span>
            <span className='text-[#7F4F24] font-semibold'><span className='font-bold text-2xl text-[#414833]'>{singlePageLoc.pages} </span>320</span>
            <span className='text-[#7F4F24] font-semibold'><span className='font-bold text-2xl text-[#414833]'>{singlePageLoc.cover}</span>َشومیز</span>
            <span className='text-[#7F4F24] font-semibold'><span className='font-bold text-2xl text-[#414833]'>{singlePageLoc.name}</span>یاغی شن ها 1</span>
            <span className='text-[#7F4F24] font-semibold'><span className='font-bold text-2xl text-[#414833]'>{singlePageLoc.category}</span>جوان، علمی‌تخیلی،فانتزی</span>
          </div>

          <span>210.000 T</span>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo aspernatur pariatur nobis veniam eligendi, aut minus ea eos delectus, vitae fugiat nesciunt mollitia quis saepe error assumenda officia, ex tempora necessitatibus deserunt voluptatibus doloribus nemo facilis! Accusamus ipsa exercitationem deserunt aspernatur ullam, sapiente laborum fugiat obcaecati voluptatem pariatur necessitatibus saepe.</p>

          <div>
            <button>+</button>
            <span></span>
            <button>-</button>
          </div>
        </div>
      </div>

    </div>
  )
}
