'use client'
import BankForm from '@/components/payment/bankForm'
import Successful from '@/components/payment/Successful'
import UnSccessful from '@/components/payment/unSccessful'
import React, { useState } from 'react'

export default function page() {
    const [paymentStatus, setPaymentStatus] = useState<null | 'success' | 'fail'>(null);

    const handleSuccess = () => {

        setPaymentStatus('success');
        localStorage.removeItem('cartProducts');
    };

    const handleCancel = () => {
        setPaymentStatus('fail');
    };
    return (
        <div className='w-full flex flex-col justify-center items-center p-8'>
            {paymentStatus === null && <BankForm onSuccess={handleSuccess} onCancel={handleCancel} />}
            {paymentStatus === 'success' && <Successful />}
            {paymentStatus === 'fail' && <UnSccessful />}
        </div>
    )
}
