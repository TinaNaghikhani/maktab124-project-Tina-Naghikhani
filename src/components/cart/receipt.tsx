'use client'

import React, { useEffect, useState } from 'react'
import Input from '../base/input/page'
import Button from '../base/button/page'
import Image from 'next/image'
import receiptPic from '@/assets/58029023796145542.png'
import { useRouter } from 'next/navigation'
import { receipt } from '@/localization/localization'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { setFinalPrice } from '@/redux/reducers/receipt'

export default function ReceiptComponent() {
    const dispatch = useDispatch()
    const router = useRouter()

    const products = useSelector((state: RootState) => state.cart.books)
    const quantities = useSelector((state: RootState) => state.cart.quantities)

    const [discountCode, setDiscountCode] = useState('')
    const [extraDiscount, setExtraDiscount] = useState(0)
    const [codeApplied, setCodeApplied] = useState(false)
    const [error, setError] = useState('')
    const [finalPrice, setFinalPriceState] = useState(0)
    const [totalOriginalPrice, setTotalOriginalPrice] = useState(0)
    const [totalDiscount, setTotalDiscount] = useState(0)

    useEffect(() => {
        if (products.length > 0) {
            let original = 0
            let discount = 0

            for (const p of products) {
                const qty = quantities[p.id] || 1
                original += p.price * qty
                discount += p.price * (p.offer / 100) * qty
            }

            const finalBeforeCode = original - discount
            const final = finalBeforeCode - extraDiscount

            setTotalOriginalPrice(original)
            setTotalDiscount(discount)
            setFinalPriceState(final)

            dispatch(setFinalPrice(final)) // ✅ ذخیره در Redux برای Persist
        }
    }, [products, quantities, extraDiscount, dispatch])

    const handleDiscountCode = (e: React.FormEvent) => {
        e.preventDefault()
        if (discountCode === 'CF10') {
            const discountAmount = (totalOriginalPrice - totalDiscount) * 0.10
            setExtraDiscount(discountAmount)
            setCodeApplied(true)
            setError('')
        } else {
            setExtraDiscount(0)
            setCodeApplied(false)
            setError(receipt.disCountUnSuccess)
        }
    }

    const pay = () => {
        const AccessToken = localStorage.getItem('AccessToken')
        if (!AccessToken) {
            router.push('/singUp')
        } else {
            router.push('/checkout')
        }
    }

    return (
        <div className='sticky top-18 left-10 block bg-[#A4AC86] w-1/4 h-5/6 p-4 gap-2 flex flex-col items-center justify-center'>
            <Image src={receiptPic} alt='فاکتور خرید' className='w-36 -mt-15' />

            <form
                onSubmit={handleDiscountCode}
                className='w-full flex flex-col justify-center items-center border-b-2 border-dotted border-white p-4'
            >
                <div className='flex flex-col justify-start w-full items-start'>
                    <h3 className='text-2xl font-semibold w-32'>{receipt.disCount}</h3>
                    <Input
                        error={error && <p className='text-red-200 text-sm mt-1'>{error}</p>}
                        value={discountCode}
                        onChange={(e) => setDiscountCode(e.target.value)}
                        type='text'
                        className='w-full bg-white px-1 rounded-lg text-[#582F0E] text-xl self-center focus:outline-none'
                    />
                    {codeApplied && (
                        <p className='text-green-200 text-sm my-3'>{receipt.disCoutSuccess}</p>
                    )}
                </div>
                <Button
                    type='submit'
                    className='cursor-pointer bg-[#333D29] text-white py-1 px-2 rounded-lg text-xl'
                    label={receipt.diCountBtn}
                />
            </form>

            <div className='flex flex-col gap-4 items-center'>
                <div className='w-full flex justify-between text-2xl'>
                    <h2 className='font-semibold'>{receipt.bookPrice}</h2>
                    <h2>{Math.round(totalOriginalPrice).toLocaleString()} تومن</h2>
                </div>
                <div className='w-full flex justify-between text-2xl'>
                    <h2 className='font-semibold'>{receipt.totalDiscount}</h2>
                    <h2>{Math.round(totalDiscount + extraDiscount).toLocaleString()} تومن</h2>
                </div>
                <div className='w-full flex justify-between text-2xl'>
                    <h2 className='font-semibold'>{receipt.totalPrice}</h2>
                    <h2>{Math.round(finalPrice).toLocaleString()} تومن</h2>
                </div>
                <div className='w-full px-4 py-2 flex justify-around bg-[#C2C5AA] text-2xl rounded-xl'>
                    <h2 className='font-semibold'>{receipt.priceToPay}</h2>
                    <h2>{Math.round(finalPrice).toLocaleString()} تومن</h2>
                </div>
                <Button
                    onClick={pay}
                    type='button'
                    className='bg-[#333D29] text-white py-1 px-2 rounded-lg text-xl w-40 cursor-pointer'
                    label={receipt.payBtn}
                />
            </div>
        </div>
    )
}
