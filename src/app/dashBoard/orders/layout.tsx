import React, { ReactNode } from 'react'
import { dashboardLocalization } from '@/localization/localization'
import { LayoutProps } from '@/interfaces/interface'
import Image from 'next/image'
import SidBarDashboard from '@/components/sideBarDashBoard/sidBarDashboard'

export default function DashboardLayout({ children }:LayoutProps) {
    const { header } = dashboardLocalization
    return (
        <div className='bg-[#FEFAE0]'>
            <SidBarDashboard/>
            
            <div className='bg-[#936639] text-[#C2C5AA] text-2xl flex flex-row-reverse p-6 justify-between  '>
                <p>{header.welcome}</p>
                <Image src="/assets/logo.png"
                    alt="logo"
                    width={50}
                    height={50}
                    className="ml-4" />
            </div>

            <main className="flex-grow">{children}</main>
        </div>
    )
}
