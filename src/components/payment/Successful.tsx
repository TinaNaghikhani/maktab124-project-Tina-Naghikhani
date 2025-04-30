import React from 'react'
import checkMark from '@/assets/istockphoto-1482751043-612x612.png'
import Image from 'next/image'
export default function Successful() {
    return (
        <div className='flex gap-10 w-5/6 justify-center items-center'>
            <Image src={checkMark} alt={'check Mark'} className='w-80 h-80' />
            <p className='text-5xl font-bold'><br />
                ✅ خرید شما با موفقیت انجام شد
                <br />
                💕بابت اعتمادتون سپاس گزاریم
                <br />
                📞جهت هماهنگی ارسال با شما تماس میگیریم
            </p>
        </div>
    )
}
