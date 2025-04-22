import { LayoutProps } from '@/interfaces/interface'
import React from 'react'

export default function SingleProLayout({children}:LayoutProps) {
  return (
    <div className='bg-[#FEFAE0] '>
          <main className="flex-grow">{children}</main>
    </div>
  )
}