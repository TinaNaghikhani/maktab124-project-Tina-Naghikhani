import React from 'react'
import { dashboardLocalization } from '@/localization/localization'
export default function () {
  const { orderTabel } = dashboardLocalization
  return (
    <div className='flex flex-col gap-10 items-center m-8'>
      <table className='w-5/6 text-center text-xl p-2 bg-[#A4AC86] rounded-xl text-white shadow-xl'>
        <thead className='p-2 border'>
          <tr>
            <th>{orderTabel.userName}</th>
            <th>{orderTabel.time}</th>
            <th>{orderTabel.price}</th>
            <th></th>
          </tr>
        </thead>
        <tr className='border hover:bg-[#C2C5AA]'>
          <th>مریم حسینی</th>
          <th>11/11/1403</th>
          <th>3.000.000 تومن</th>
          <th>وضعیت سفارش</th>
        </tr>
        <tr className='border hover:bg-[#C2C5AA]'>
          <th>مریم حسینی</th>
          <th>11/11/1403</th>
          <th>3.000.000 تومن</th>
          <th>وضعیت سفارش</th>
        </tr>
        <tr className='border hover:bg-[#C2C5AA]'>
          <th>مریم حسینی</th>
          <th>11/11/1403</th>
          <th>3.000.000 تومن</th>
          <th>وضعیت سفارش</th>
        </tr>
        <tr className='border hover:bg-[#C2C5AA]'>
          <th>مریم حسینی</th>
          <th>11/11/1403</th>
          <th>3.000.000 تومن</th>
          <th>وضعیت سفارش</th>
        </tr>
      </table>
    </div>
  )
}
