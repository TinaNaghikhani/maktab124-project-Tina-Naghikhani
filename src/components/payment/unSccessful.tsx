import React from 'react'
import Image from 'next/image'
import crossMark from '@/assets/—Pngtree—crossmark symbol vector illustration_6857995.png'

export default function UnSccessful() {
    return (
        <div>
            <div className='flex gap-10 w-5/6 justify-center items-center'>
                <Image src={crossMark} alt={'cros Mark'} className='w-96 h-96' />
                <p className='text-5xl font-bold'><br />
                    ❌ پرداخت نا موفق بود
                    <br />
                    ❗ سفارش شما در انتظار پرداخت میباشد
                </p>
            </div>
        </div>
    )
}
