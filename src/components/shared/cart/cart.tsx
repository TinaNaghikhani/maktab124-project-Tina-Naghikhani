import React from 'react'
import book from '@/assets/124b9ec60ec3c6ded058202086349725.jpg'
import Image from 'next/image';

export default function CartComponent() {
    return (
        <div id='cart' className='w-52 h-64 relative overflow-hidden group'>
            <Image
                src={book}
                alt="تصویر"
                className='w-full h-full object-cover rounded-3xl absolute top-0 left-0 transition-opacity duration-300 group-hover:opacity-0'
            />
            <div className='flex flex-col gap-3 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#B6AD90] w-full h-full rounded-3xl'>
                <p className='text-2xl text-[#656D4A] font-bold'>یاغی شن ها</p>
                <hr className='w-5/6 rounded-full h-1 bg-[#7F4F24] border-0 ' />
                <p className='text-2xl text-[#656D4A] font-bold'>کایرا کاس</p>
                <hr className='w-5/6 rounded-full h-1 bg-[#7F4F24] border-0 ' />
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-2 justify-between w-full'>
                        <span className='bg-red-700 text-white font-bold text-lg rounded-3xl p-1'>3%</span>
                        <span className='text-2xl'>210.000 T</span>
                    </div>
                    <span className='self-end text-2xl'>203.700 T</span>
                </div>
            </div>
        </div>
    )
}
