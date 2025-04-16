'use client'
import React, { useEffect, useState } from 'react'
import { dashboardLocalization } from '@/localization/localization'
import { getOrder } from '@/services/getOrder/getOrder';
export default function () {
  const { orderTabel } = dashboardLocalization
    const [orders, setorders] = useState<any[]>([]);
    useEffect(() => {
      const fetchorders = async () => {
        try {
          const data = await getOrder();
          setorders(data);
        } catch (error) {
          console.error('Error fetching orders:', error);
        }
      };
  
      fetchorders();
    }, []);
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
        <tbody>
          {orders.map((order) => (
          <tr key={order.id}className='border hover:bg-[#C2C5AA]'>
            <th>{order.firstName}</th>
            <th>{order.time}</th>
            <th>{order.price} تومن</th>
            <th>{order.case}</th>
          </tr>
          ))}
        </tbody>

      </table>
    </div>
  )
}
