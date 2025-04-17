import BestSellerChart from '@/components/bestSelleChart/bestSelleChart'
import SaleChart from '@/components/sallechart/saleChart'
import React from 'react'

export default function page() {
  return (
    <div className='w-full p-2 flex justify-around'>
      <div>
        <SaleChart />

      </div>
      <div>
        <BestSellerChart />

      </div>
    </div>
  )
}
