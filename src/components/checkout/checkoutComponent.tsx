'use client'
import React, { useState } from 'react'
import Input from '../base/input/page'
import { checkoutPageLoc } from '../../localization/localization'
import Button from '../base/button/page'
import { useRouter } from 'next/navigation'
export default function CheckoutComponent() {
    const phoneNumberRegex = /^09\d{9}$/;
    const codeRegex = /^\d{10}$/;
    const [isSubmited, setIsSubmited] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState("")
    const [code, setCode] = useState("")
    const [phoneNumberErr, setPhoneNumberErr] = useState("")
    const [codeErr, setCodeErr] = useState("")
    const [name, setName] = useState("")
    const [nameErr, setNameErr] = useState("")
    const [lName, setLName] = useState("")
    const [lNameErr, setLNameErr] = useState("")
    const [address, setaddress] = useState("")
    const [addressErr, setAddressErr] = useState("")

    const router = useRouter()
    const btnHandler = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsSubmited(true)
        let isValid = true
        if (name === "") {
            setNameErr(checkoutPageLoc.errorName)
            isValid = false
        }
        if (lName === "") {
            setLNameErr(checkoutPageLoc.errorLName)
            isValid = false
        }
        if (phoneNumber.trim() === "") {
            setPhoneNumberErr(checkoutPageLoc.errorPhoneNumber);
            isValid = false;
        } else if (!phoneNumberRegex.test(phoneNumber.trim())) {
            setPhoneNumberErr(checkoutPageLoc.errorPhoneNumberInput);
            isValid = false;
        }
        if (code.trim() === "") {
            setCodeErr(checkoutPageLoc.errorCode);
            isValid = false;
        } else if (!codeRegex.test(code.trim())) {
            setCodeErr(checkoutPageLoc.errorCodeInput);
            isValid = false;
        }
        if (address === "") {
            setAddressErr(checkoutPageLoc.errorAddress)
            isValid = false
        }
        if (isValid) {
            router.push('/payment')
        }
    }
    return (
        <form onSubmit={btnHandler} className='bg-[#A68A64] p-8 grid grid-cols-2 gap-10 rounded-2xl w-5/6 text-2xl text-[#fefae0] shadow-2xl'>
            <Input error={isSubmited && nameErr && <p className="md:text-xl sm:text-xs text-white">{nameErr}</p>} onChange={((e: any) => setName(e.target.value)) as unknown as () => void} type={'text'} placeholder={''} className={'border-1 mt-2 focus:outline-none rounded-2xl shadow-xl text-[#414833] px-2 py-1 text-xl bg-[#fefae0]'} label={checkoutPageLoc.name} />
            <Input error={isSubmited && lNameErr && <p className="md:text-xl sm:text-xs text-white">{lNameErr}</p>} onChange={((e: any) => setLName(e.target.value)) as unknown as () => void} type={'text'} placeholder={''} className={'border-1 mt-2 focus:outline-none rounded-2xl shadow-xl text-[#414833] px-2 py-1 text-xl bg-[#fefae0]'} label={checkoutPageLoc.LName} />
            <Input error={isSubmited && codeErr && <p className="md:text-xl sm:text-xs text-white">{codeErr}</p>} onChange={((e: any) => setCode(e.target.value)) as unknown as () => void} type={'text'} placeholder={''} className={'border-1 mt-2 focus:outline-none rounded-2xl shadow-xl text-[#414833] px-2 py-1 text-xl bg-[#fefae0]'} label={checkoutPageLoc.code} />
            <Input error={isSubmited && phoneNumberErr && <p className="md:text-xl sm:text-xs text-white">{phoneNumberErr}</p>} onChange={((e: any) => setPhoneNumber(e.target.value)) as unknown as () => void} type={'text'} placeholder={''} className={'border-1 mt-2 focus:outline-none rounded-2xl shadow-xl text-[#414833] px-2 py-1 text-xl bg-[#fefae0]'} label={checkoutPageLoc.phoneNumber} />

            <div className='col-span-1 flex flex-col gap-2'>
                <label htmlFor="texterea">{checkoutPageLoc.address}</label>
                <textarea onChange={(e) => setaddress(e.target.value)} placeholder={''} className={'border-1 focus:outline-none rounded-2xl shadow-xl text-[#414833] px-2 py-1 text-xl bg-[#fefae0]'} />
                {isSubmited && addressErr && (
                    <p className="md:text-xl sm:text-xs text-white">{addressErr}</p>
                )}
            </div>
            <Button type={'submit'} className={'cursor-pointer mt-20 bg-[#656D4A] text-[#fefae0] px-8 py-1 rounded-xl shadow-xl grid justify-self-end align-self-end'} label={checkoutPageLoc.chekoutBtn} />
        </form>
    )
}
