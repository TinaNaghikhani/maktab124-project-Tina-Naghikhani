import Image from 'next/image'
import novel from '@/assets/yagi shenha/8fccceafe6c39e75fc335e3a33e2017e.jpg';
import { FaTrashAlt } from "react-icons/fa";
import React from 'react'
import Button from '../base/button/page';
import cartPic from '@/assets/5802902379614554234.png'
export default function CartComponent() {
    return (
        <div className='flex flex-col gap-2 items-center p-8 w-3/4 bg-[#A68A64] text-white'>
            <Image src={cartPic} alt={'سبد خرید'} className='w-40 -mt-20' />
            <div className='w-full border-b-2 border-dotted border-white flex gap-8 py-4'>
                <Image src={novel} alt="novel" className='w-40 h-52 rounded-xl' />
                <div className='flex flex-col gap-4 w-full'>
                    <h2 className='text-4xl font-bold'>یاغی شن ها</h2>
                    <div className='flex gap-10'>
                        <h3 className='text-2xl font-semibold'>قیمت : 340.000 تومن</h3>
                        <p className='text-xl bg-red-400 rounded-2xl p-1 font-semibold'>10%</p>
                        <h3 className='text-2xl font-semibol'>34.000 تومن</h3>
                    </div>
                    <div className='w-full flex justify-between'>
                        <div className='flex gap-2 px-4 py-2 rounded-xl text-black'>
                            <button className='w-8 rounded-xl bg-green-200 text-2xl font-bold text-center cursor-pointer'>+</button>
                            <span className='w-10 rounded-xl bg-green-200 text-2xl font-bold text-center'>12</span>
                            <button className='w-8 rounded-xl bg-green-200 text-2xl font-bold text-center cursor-pointer'>-</button>
                            <button className='w-8 rounded-xl bg-red-500 text-xl p-1 font-bold text-center cursor-pointer'><FaTrashAlt className='text-white w-6' /></button>
                        </div>
                        <p className='text-2xl bg-[#A4AC86] rounded-xl p-2'>مجموع قیمت : 339.000 تومن</p>
                    </div>
                </div>
            </div>
            <div className='w-full border-b-2 border-dotted border-white flex gap-8 py-4'>
                <Image src={novel} alt="novel" className='w-40 h-52 rounded-xl' />
                <div className='flex flex-col gap-4 w-full'>
                    <h2 className='text-4xl font-bold'>یاغی شن ها</h2>
                    <div className='flex gap-10'>
                        <h3 className='text-2xl font-semibold'>قیمت : 340.000 تومن</h3>
                        <p className='text-xl bg-red-400 rounded-2xl p-1 font-semibold'>10%</p>
                        <h3 className='text-2xl font-semibol'>34.000 تومن</h3>
                    </div>
                    <div className='w-full flex justify-between'>
                        <div className='flex gap-2 px-4 py-2 rounded-xl text-black'>
                            <button className='w-8 rounded-xl bg-green-200 text-2xl font-bold text-center cursor-pointer'>+</button>
                            <span className='w-10 rounded-xl bg-green-200 text-2xl font-bold text-center'>12</span>
                            <button className='w-8 rounded-xl bg-green-200 text-2xl font-bold text-center cursor-pointer'>-</button>
                            <button className='w-8 rounded-xl bg-red-500 text-xl p-1 font-bold text-center cursor-pointer'><FaTrashAlt className='text-white w-6' /></button>
                        </div>
                        <p className='text-2xl bg-[#A4AC86] rounded-xl p-2'>مجموع قیمت : 339.000 تومن</p>
                    </div>
                </div>
            </div>
            <div className='w-full border-b-2 border-dotted border-white flex gap-8 py-4'>
                <Image src={novel} alt="novel" className='w-40 h-52 rounded-xl' />
                <div className='flex flex-col gap-4 w-full'>
                    <h2 className='text-4xl font-bold'>یاغی شن ها</h2>
                    <div className='flex gap-10'>
                        <h3 className='text-2xl font-semibold'>قیمت : 340.000 تومن</h3>
                        <p className='text-xl bg-red-400 rounded-2xl p-1 font-semibold'>10%</p>
                        <h3 className='text-2xl font-semibol'>34.000 تومن</h3>
                    </div>
                    <div className='w-full flex justify-between'>
                        <div className='flex gap-2 px-4 py-2 rounded-xl text-black'>
                            <button className='w-8 rounded-xl bg-green-200 text-2xl font-bold text-center cursor-pointer'>+</button>
                            <span className='w-10 rounded-xl bg-green-200 text-2xl font-bold text-center'>12</span>
                            <button className='w-8 rounded-xl bg-green-200 text-2xl font-bold text-center cursor-pointer'>-</button>
                            <button className='w-8 rounded-xl bg-red-500 text-xl p-1 font-bold text-center cursor-pointer'><FaTrashAlt className='text-white w-6' /></button>
                        </div>
                        <p className='text-2xl bg-[#A4AC86] rounded-xl p-2'>مجموع قیمت : 339.000 تومن</p>
                    </div>
                </div>
            </div>
            <Button type={"button"} className={'py-1 px-6 text-3xl font-bold bg-[#582F0E] text-white rounded-xl mt-3'} label={'ادامه خرید'} />
        </div>
    )
}
