'use client'

import BankForm from '@/components/payment/bankForm'
import Successful from '@/components/payment/Successful'
import UnSccessful from '@/components/payment/unSccessful'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { RootState } from '@/redux/store'
import { clearCheckoutInfo } from '@/redux/reducers/checkout'
import { clearCart } from '@/redux/reducers/cart'
import { setFinalPrice } from '@/redux/reducers/receipt'

export default function Page() {
    const [paymentStatus, setPaymentStatus] = useState<null | 'success' | 'fail'>(null)
    const cart = useSelector((state: RootState) => state.cart)
    const receipt = useSelector((state: RootState) => state.receipt)
    const checkout = useSelector((state: RootState) => state.checkout)
    const dispatch = useDispatch()

    const BASE_URL = 'http://api.alikooshesh.ir:3000'
    const API_KEY = 'booktinaswuIVzBeQZ98DMmOEmjLenHyKzAbG5UJ4PrAHkD3gV4OnOQvlm6Siz9bKUfKzXjaMicQFeZu21VVmwiwUK5I4qoARsmpvsg5PLu3ee1OzY7XvckHXBmdbOmy'

    const handleSuccess = async () => {
        if (!cart?.books?.length) return setPaymentStatus('fail')
        if (!checkout.name || !checkout.phone || !checkout.address) return setPaymentStatus('fail')
        if (!receipt.finalPrice) return setPaymentStatus('fail')

        const payload = {
            user: {
                name: checkout.name,
                lName: checkout.lName,
                phone: checkout.phone,
                address: checkout.address,
                code: checkout.code,
            },
            products: cart.books.map(product => ({
                id: product.id,
                name: product.name,
                price: product.price,
                offer: product.offer,
                quantity: cart.quantities?.[product.id] || 1,
            })),
            totalPrice: receipt.finalPrice,
            status: 'در حال ارسال',         // وضعیت سفارش
            deliveryStatus: 'processing',   // کلید برای تحویل
            createdAt: new Date().toISOString(), // زمان سفارش
        }

        try {
            const token = localStorage.getItem('AccessToken')

            await axios.post(`${BASE_URL}/api/records/order`, payload, {
                headers: {
                    api_key: API_KEY,
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            })

            // پاک کردن وضعیت محلی (ریداکس و لوکال‌استوریج)
            dispatch(clearCheckoutInfo())
            dispatch(setFinalPrice(0))
            localStorage.removeItem('cartProducts')

            setPaymentStatus('success')
        } catch (error) {
            console.error('خطا در ارسال سفارش:', error)
            setPaymentStatus('fail')
        }
    }

    const handleCancel = () => {
        setPaymentStatus('fail')
    }

    return (
        <div className='w-full flex flex-col justify-center items-center p-8'>
            {paymentStatus === null && <BankForm onSuccess={handleSuccess} onCancel={handleCancel} />}
            {paymentStatus === 'success' && <Successful />}
            {paymentStatus === 'fail' && <UnSccessful />}
        </div>
    )
}
