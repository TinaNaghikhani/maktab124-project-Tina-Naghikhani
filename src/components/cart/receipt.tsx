import React from 'react'
import Input from '../base/input/page'
import Button from '../base/button/page'

export default function ReceiptComponent() {
    return (
        <div className='bg-[#A4AC86] w-1/4 h-5/6 p-4 gap-2'>
            <form className='flex flex-col justify-center items-center border-b-2 border-dotted border-white p-4'>
                <div className='flex justify-center w-full items-center '>
                    <h3 className='text-2xl font-semibold w-32'>کد تخفیف :</h3>
                    <Input type={'text'} placeholder={'CF20'} className={' bg-white p-1 rounded-lg text-[#582F0E] text-xl self-center focus:outline-none'} label={''} />
                </div>
                <Button type={'submit'} className={'bg-[#333D29] text-white py-1 px-2  rounded-lg text-xl'} label={'اعمال کد تخفیف'}/>
            </form>
            <div className='flex flex-col gap-4 justify-center items-center'>
                <div className='flex justify-around text-2xl'>
                    <h2 className='font-semibold'>قیمت کتاب ها :</h2>
                    <h2>360.000 تومن</h2>
                </div>
                <div className='flex justify-around text-2xl'>
                    <h2 className='font-semibold'>تخفیف :</h2>
                    <h2>36.000 تومن</h2>
                </div>
                <div className='flex justify-around text-2xl'>
                    <h2 className='font-semibold'>قیمت نهایی :</h2>
                    <h2>324.000 تومن</h2>
                </div>
                <div className='flex justify-around bg-[#C2C5AA] text-3xl'>
                    <h2 className='font-semibold'>مبلغ قابل پرداخت :</h2>
                    <h2>324.000 تومن</h2>
                </div>
                <Button type={'button'} className={'bg-[#333D29] text-white py-1 px-2  rounded-lg text-xl w-40 '} label={'اتمام خرید'}/>
            </div>
        </div>
    )
}
