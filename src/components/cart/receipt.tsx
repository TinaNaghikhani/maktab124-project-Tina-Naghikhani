'use client'
import React from 'react'
import Input from '../base/input/page'
import Button from '../base/button/page'
import Image from 'next/image'
import receiptPic from '@/assets/58029023796145542.png'
import { useRouter } from 'next/navigation'
import { useCart } from '@/context/CartContext'; 


export default function ReceiptComponent() {
    const { products, quantities } = useCart();

    const totalOriginalPrice = products.reduce((acc, p) => {
        const qty = quantities[p.id] || 1;
        return acc + (p.price * qty);
    }, 0);

    const totalDiscount = products.reduce((acc, p) => {
        const qty = quantities[p.id] || 1;
        const discount = p.price * (p.offer / 100);
        return acc + (discount * qty);
    }, 0);

    const finalPrice = totalOriginalPrice - totalDiscount;
    const router = useRouter()
    const pay = ()=>{
        router.push('/checkout')
    }
    return (
        <div className='sticky top-18 left-10 block bg-[#A4AC86] w-1/4 h-5/6 p-4 gap-2 flex flex-col items-center justify-center'>
            <Image src={receiptPic} alt={'فاکتور خرید'} className='w-36 -mt-15' />
            <form className='w-full flex flex-col justify-center items-center border-b-2 border-dotted border-white p-4'>
                <div className='flex justify-center w-full items-center '>
                    <h3 className='text-2xl font-semibold w-32'>کد تخفیف :</h3>
                    <Input type={'text'} placeholder={'CF20'} className={' bg-white p-1 rounded-lg text-[#582F0E] text-xl self-center focus:outline-none'} label={''} />
                </div>
                <Button type={'submit'} className={'bg-[#333D29] text-white py-1 px-2  rounded-lg text-xl'} label={'اعمال کد تخفیف'}/>
            </form>
            <div className='flex flex-col gap-4 items-center '>
                <div className='w-full flex justify-between text-2xl'>
                    <h2 className='font-semibold'>قیمت کتاب ها :</h2>
                    <h2>{Math.round(totalOriginalPrice).toLocaleString()} تومن</h2>
                </div>
                <div className='w-full flex justify-between text-2xl'>
                    <h2 className='font-semibold'>تخفیف :</h2>
                    <h2>{Math.round(totalDiscount).toLocaleString()} تومن</h2>
                </div>
                <div className='w-full flex justify-between text-2xl'>
                    <h2 className='font-semibold'>قیمت نهایی :</h2>
                    <h2>{Math.round(finalPrice).toLocaleString()} تومن</h2>
                </div>
                <div className='w-full px-4 py-2 flex justify-around bg-[#C2C5AA] text-2xl rounded-xl'>
                    <h2 className='font-semibold'>مبلغ قابل پرداخت :</h2>
                    <h2>{Math.round(finalPrice).toLocaleString()} تومن</h2>
                </div>
                <Button onClick={pay} type={'button'} className={'bg-[#333D29] text-white py-1 px-2  rounded-lg text-xl w-40 cursor-pointer'} label={'اتمام خرید'}/>
            </div>
        </div>
    )
}
