'use client'
import BestSellerChart from '@/components/bestSelleChart/bestSelleChart'
import SaleChart from '@/components/sallechart/saleChart'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function page() {
  const router = useRouter()
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken")
    if (!accessToken) {
      router.push("/login-dashboard")
    }
  }, [router]);

  return (
    <div className='w-5/6 h-full p-8 mr-20 flex justify-around gap-8 '>
      <div className='w-1/2 h-3/4'>
        <SaleChart />

      </div>
      <div className='w-1/2 h-3/4'>
        <BestSellerChart />

      </div>
    </div>
  )
}
