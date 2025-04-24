import React from 'react'
import { pageLevelLocalization } from '@/localization/localization'
import { IoIosBasket } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { TiThMenuOutline } from "react-icons/ti";
import logo from "@/assets/logo.png"
import Image from 'next/image'
import Link from 'next/link';


export default function Header() {
    const { header } = pageLevelLocalization

    return (
        <div className='flex gap-8 justify-between items-center px-8 py-2 bg-[#606C38] text-white'>
            <div className='flex gap-4'>
                <TiThMenuOutline className="text-3xl mt-4 cursor-pointer hover:border-b" />
                <nav className='flex gap-6 justify-center items-center p-4 '>
                    <Link href={'/'}>
                        <button className='text-xl cursor-pointer hover:border-b'>{header.home}</button>
                    </Link>
                    {/* <button className='text-xl cursor-pointer hover:border-b'>{header.fantasy}</button>
                    <button className='text-xl cursor-pointer hover:border-b'>{header.litriture}</button>
                    <button className='text-xl cursor-pointer hover:border-b'>{header.history}</button> */}
                    {/* <button className='text-xl cursor-pointer hover:border-b'>{header.juniuor}</button> */}
                    {/* <button className='text-xl cursor-pointer hover:border-b'>{header.novel}</button> */}
                    <Link href={'/about'}>
                        <button className='text-xl cursor-pointer hover:border-b'>{header.about}</button>
                    </Link>
                    <Link href={'/contact'}>
                        <button className='text-xl cursor-pointer hover:border-b'>{header.contact}</button>

                    </Link>
                </nav>
            </div>
            <Image src={logo.src}
                alt="logo"
                width={200}
                height={200}
                className="-pt-2" />
            <div className='p-4 flex gap-8'>
                <Link href={'/cart'}>
                    <IoIosBasket className="text-3xl cursor-pointer hover:border-b" />
                </Link>
            <Link href="/login-dashboard">
                <CgProfile className="text-3xl cursor-pointer hover:border-b" />
            </Link>
        </div>


        </div >

    )
}
