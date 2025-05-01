import Footer from '@/components/shared/footer/page'
import Header from '@/components/shared/header/page'
import { LayoutProps } from '@/interfaces/interface'
import React from 'react'

export default function SingleProLayout({ children }: LayoutProps) {
    return (
        <div className='bg-[#FEFAE0]'>
            <Header/>
            <main className="flex-grow pb-96">{children}</main>
            <Footer/>
        </div>
    )
}