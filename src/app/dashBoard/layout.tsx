'use client'
import React, { ReactNode } from 'react'
import { dashboardLocalization } from '@/localization/localization'
import { LayoutProps } from '@/interfaces/interface'
import Image from 'next/image'
import SidBarDashboard from '@/components/sideBarDashBoard/sidBarDashboard'
import logo from '@/assets/logo.png'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'

export default function DashboardLayout({ children }: LayoutProps) {
    const { header } = dashboardLocalization
    return (
        <Provider store={store}>
            <div className='bg-[#FEFAE0] flex flex-col overflow-hidden'>
                <div className='w-full bg-[#936639] flex p-6 justify-between  '>
                    <p className='text-4xl font-bold text-[#C2C5AA]'>{header.welcome}</p>
                    <Image src={logo.src}
                        alt="logo"
                        width={150}
                        height={200}
                        className="ml-4" />
                </div>
                <div className='flex'>
                    <SidBarDashboard />
                    <main className="flex-grow">{children}</main>

                </div>


            </div>

        </Provider>

    )
}
