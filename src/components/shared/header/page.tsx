import React from 'react'
import { pageLevelLocalization } from '@/localization/localization'
import { IoIosBasket } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { TiThMenuOutline } from "react-icons/ti";
import logo from "@/assets/logo.png"

export default function Header() {
    const { header } = pageLevelLocalization
    return (
        <div className='flex gap-8 justify-between items-baseline px-8 bg-[#606C38] text-white'>
            <div className='p-4 flex gap-8'>
                <IoIosBasket className="text-3xl cursor-pointer hover:border-b" />
                <CgProfile className="text-3xl cursor-pointer hover:border-b" />
            </div>
            <img src={logo} alt="logo" />
            <TiThMenuOutline className="text-3xl mt-4 cursor-pointer hover:border-b" />
            <nav className='flex gap-6 justify-center items-center p-4 flex-row-reverse hidden'>
                <button className='text-xl cursor-pointer hover:border-b'>{header.home}</button>
                <button className='text-xl cursor-pointer hover:border-b'>{header.fantasy}</button>
                <button className='text-xl cursor-pointer hover:border-b'>{header.enigmatic}</button>
                <button className='text-xl cursor-pointer hover:border-b'>{header.history}</button>
                <button className='text-xl cursor-pointer hover:border-b'>{header.juniuor}</button>
                <button className='text-xl cursor-pointer hover:border-b'>{header.manga}</button>
                <button className='text-xl cursor-pointer hover:border-b'>{header.play}</button>
                <button className='text-xl cursor-pointer hover:border-b'>{header.about}</button>
                <button className='text-xl cursor-pointer hover:border-b'>{header.contact}</button>
            </nav>

        </div>

    )
}
