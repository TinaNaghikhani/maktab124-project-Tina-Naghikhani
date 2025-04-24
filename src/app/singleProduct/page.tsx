import React from 'react'
import yagiHeader from '@/assets/yaghiheader.png'
import book from '@/assets/yagi shenha/b6dca1e50653da04f51fcfcacfa29016.png'
import Image from 'next/image';
import { singlePageLoc } from "@/localization/localization";
export default function page() {
  return (
    <>
    <main>
        <div className='p-4 flex flex-col gap-10'>
          <Image
            src={yagiHeader}
            alt="تصویر"
          />
          <div className='flex justify-around gap-8 w-full'>
            <div id='image' className='sticky top-120 left-10 block flex flex-col items-center justift-center gap-4'>
              <Image
                src={book}
                alt="تصویر"
                className='w-80 h-80 rounded-3xl'
              />
              <div className='w-40 flex flex-col gap-2 justify-center items-center w-5/6 '>
                <span className='text-2xl font-semibold text-[#936639] hover:text-[#A4AC86] cursor-pointer'>{singlePageLoc.header}</span>
                <hr className='w-32 rounded-full mx-10 h-1 bg-[#7F4F24] border-0' />
                <span className='text-2xl font-semibold text-[#936639] hover:text-[#A4AC86] cursor-pointer'>{singlePageLoc.founder}</span>
                <hr className='w-32 rounded-full mx-10 h-1 bg-[#7F4F24] border-0' />
                <span className='text-2xl font-semibold text-[#936639] hover:text-[#A4AC86] cursor-pointer'>{singlePageLoc.buy}</span>
              </div>
            </div>
            <div className='w-1/2 p-4 flex flex-col gap-2'>
              <p className='text-5xl font-bold italic text-[#7F4F24] m-4'>یاغی شن ها 1</p>
              <hr className='w-full rounded-full mx-10 h-1 bg-[#7F4F24] border-0 ' />
              <div className='flex gap-8 justify-between items-start'>
                <div className='flex flex-col gap-4'>
                  <span className='text-[#7F4F24] text-2xl font-semibold'><span className='font-bold text-3xl text-[#414833]'>{singlePageLoc.athur} </span>کایرا کاس</span>
                  <span className='text-[#7F4F24] text-2xl font-semibold'><span className='font-bold text-3xl text-[#414833]'>{singlePageLoc.pages} </span>320</span>
                  <span className='text-[#7F4F24] text-2xl font-semibold'><span className='font-bold text-3xl text-[#414833]'>{singlePageLoc.cover}</span>َشومیز</span>
                  <span className='text-[#7F4F24] text-2xl font-semibold'><span className='font-bold text-3xl text-[#414833]'>{singlePageLoc.name}</span>یاغی شن ها 1</span>
                  <span className='text-[#7F4F24] text-2xl font-semibold'><span className='font-bold text-3xl text-[#414833]'>{singlePageLoc.category}</span>جوان، علمی‌تخیلی،فانتزی</span>
                </div>
                <div className='w-44 flex flex-col gap-4 justify-center items-center p-2'>
                  <button className='bg-[#936639] w-40 h-8 rounded-4xl text-white text-xl'>{singlePageLoc.order}</button>
                  <div className='flex gap-2 justify-between w-full'>
                    <span className='bg-red-700 text-white font-bold text-lg rounded-3xl p-1'>3%</span>
                    <span className='text-2xl'>210.000 T</span>
                  </div>
                  <span className='self-end text-2xl'>203.700 T</span>
                </div>
              </div>
              <hr className='w-full rounded-full mx-10 h-1 bg-[#7F4F24] border-0 ' />
              <div className='flex flex-col gap-4 text-2xl'>
                <p>"یاغی شن‌ها" داستان جذاب و پرماجرا یک پسر جوان به نام محمود است که در برابر ظلم و بی‌عدالتی قدرتمندان محله‌اش، مقاومت می‌کند. محمود با وجود فقر و محرومیت، از روحیه‌ای شجاعانه و احساس عدالت برخوردار است. او در زندگی سخت خود، همراه با دوستانش، تلاش می‌کند تا حقوق مردم فقیر محله را از دست بازاری‌ها و افراد ثروتمند محافظت کند.</p>
                <p>کتاب با زبانی ساده و روان، اما پر از احساسات عمیق، تصویری واقعی از زندگی در محیط‌های محروم شهری ارائه می‌دهد. در این میان، شخصیت محمود با تمام نقاط ضعف و قوت، به عنوان نمادی از امید و مقاومت در برابر شرایط سخت، به خواننده الهام می‌بخشد. دوستی‌ها، عشق و تعهد به عدالت از دیگر موضوعات کلیدی این رمان هستند.</p>
                <p>معروفی در "یاغی شن‌ها" توانسته است ترکیبی از درام، رمانتیسم و اجتماعی را به خوبی به نمایش بگذارد. این کتاب نه تنها داستانی جذاب برای خوانندگان جوان است، بلکه با طرح مسائلی مانند بی‌عدالتی اجتماعی و تضاد طبقاتی، فرصتی برای تفکر و بازتاب ارائه می‌دهد. "یاغی شن‌ها" یکی از آثار ادبی است که در ذهن خواننده ردپایی عمیق به جای می‌گذارد.</p>
              </div>
              <div className='w-full h-96 flex gap-6 justify-start items-center bg-[#C2C5AA] p-6 border-t-10 rounded-2xl border-b-10 border-[#B6AD90]'>
                <div className='flex flex-col items-center gap-6 '>
                  <Image
                    src={book}
                    alt="تصویر"
                    className='w-40 h-40 rounded-3xl'
                  />
                  <p className='text-2xl text-[#7F4F24]'>کایرا کاس</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </main>
    </>

  )
}
