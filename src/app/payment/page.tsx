import BankForm from '@/components/payment/bankForm'
import Successful from '@/components/payment/Successful'
import UnSccessful from '@/components/payment/unSccessful'
import React from 'react'

export default function page() {
    return (
        <div className='w-full flex flex-col justify-center items-center p-8'>
            <BankForm />
            <Successful />
            <UnSccessful />
        </div>
    )
}
