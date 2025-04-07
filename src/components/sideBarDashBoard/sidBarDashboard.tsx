'use client'
import React from 'react'
import { dashboardLocalization } from '@/localization/localization'
import { BsFillBasketFill } from "react-icons/bs";
import { IoMdPricetags } from "react-icons/io";
import { AiOutlineProduct } from "react-icons/ai";
import Button from '../base/button/page';
import { FiLogOut } from 'react-icons/fi';
import Link from 'next/link';

export default function SidBar() {
  const { sidBar } = dashboardLocalization
  return (
    <aside className='h-screen w-[100px] hover:w-1/4  transition-all ease-in duration-300 group bg-[#936639] flex flex-col gap-2 py-4 px-5 justify-between max-sm:hidden'>
      <div className='sticky top-0 right-0'>
        <ul>
          <Link href={'/dashBoard/products'}>
            <li className="flex items-center justify-between w-full gap-3 px-8 py-2 text-[#C2C5AA] text-2xl font-bold cursor-pointer hover:bg-[#FEFAE0]">
              <p className="hidden text-xl transition-all duration-300 ease-in group-hover:block">{sidBar.products}</p>
              <AiOutlineProduct />
            </li>
          </Link>
          <Link href={'/dashBoard/inventory'}>
            <li className="flex items-center justify-between w-full gap-3 px-8 py-2 text-[#C2C5AA] text-2xl font-bold cursor-pointer hover:bg-[#FEFAE0]">
              <p className="hidden text-xl transition-all duration-300 ease-in group-hover:block">{sidBar.price}</p>
              <IoMdPricetags />
            </li>
          </Link>
          <Link href={'/dashBoard/orders'}>
            <li className="flex items-center justify-between w-full gap-3 px-8 py-2 text-[#C2C5AA] text-2xl font-bold cursor-pointer hover:bg-[#FEFAE0]">
              <p className="hidden text-xl transition-all duration-300 ease-in group-hover:block">{sidBar.order}</p>
              <BsFillBasketFill />
            </li>
          </Link>
        </ul>
      </div>
      <div>
        <Button label={<FiLogOut />} type={'button'} className={'flex items-center justify-center w-full gap-2 px-4 py-2 text-white shadow-md bg-primary round-md shadow-black'} />
      </div>
    </aside>
  )
}