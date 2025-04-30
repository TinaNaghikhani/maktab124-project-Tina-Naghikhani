import React from 'react'
import Input from '../base/input/page'
import { checkoutPageLoc } from '../../localization/localization'
import Button from '../base/button/page'
export default function CheckoutComponent() {
    return (
        <form className='bg-[#A68A64] p-8 grid grid-cols-2 gap-10 rounded-2xl w-5/6 text-2xl text-[#fefae0] shadow-2xl'>
            <Input type={'text'} placeholder={''} className={'border-1 focus:outline-none rounded-2xl shadow-xl text-[#414833] px-2 py-1 text-xl bg-[#fefae0]'} label={checkoutPageLoc.name} />
            <Input type={'text'} placeholder={''} className={'border-1 focus:outline-none rounded-2xl shadow-xl text-[#414833] px-2 py-1 text-xl bg-[#fefae0]'} label={checkoutPageLoc.LName} />
            <Input type={'text'} placeholder={''} className={'border-1 focus:outline-none rounded-2xl shadow-xl text-[#414833] px-2 py-1 text-xl bg-[#fefae0]'} label={checkoutPageLoc.code} />
            <Input type={'text'} placeholder={''} className={'border-1 focus:outline-none rounded-2xl shadow-xl text-[#414833] px-2 py-1 text-xl bg-[#fefae0]'} label={checkoutPageLoc.phoneNumber} />
            <div className='col-span-1 flex flex-col gap-2'>
                <label htmlFor="texterea">{checkoutPageLoc.address}</label>
                <textarea placeholder={''} className={'border-1 focus:outline-none rounded-2xl shadow-xl text-[#414833] px-2 py-1 text-xl bg-[#fefae0]'} />
            </div>
            <Button type={'submit'} className={'mt-20 bg-[#656D4A] text-[#fefae0] px-8 py-1 rounded-xl shadow-xl grid justify-self-end align-self-end'} label={checkoutPageLoc.chekoutBtn} />
        </form>
    )
}
