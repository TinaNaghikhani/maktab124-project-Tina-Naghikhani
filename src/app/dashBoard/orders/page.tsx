'use client'
import React, { useEffect, useState } from 'react'
import { dashboardLocalization } from '@/localization/localization'
import { getOrder } from '@/services/getOrder/getOrder';
export default function () {
  const { orderTabel } = dashboardLocalization
  const [orders, setorders] = useState<any[]>([]);
  const [filter, setFilter] = useState<'delivered'|'pending'|'all'>('all')
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
  const filteredOrders =
    filter === 'all'
      ? orders
      : orders.filter((order) => order.case === filter);

  return (
    <div className='flex flex-col gap-10 items-center m-8'>
      <div className='flex gap-4 mb-4'>
        <label>
          <input
            type='radio'
            name='filter'
            value='all'
            checked={filter === 'all'}
            onChange={() => setFilter('all')}
          />
          همه
        </label>
        <label>
          <input
            type='radio'
            name='filter'
            value='delivered'
            checked={filter === 'delivered'}
            onChange={() => setFilter('delivered')}
          />
          تحویل داده شده
        </label>
        <label>
          <input
            type='radio'
            name='filter'
            value='pending'
            checked={filter === 'pending'}
            onChange={() => setFilter('pending')}
          />
          در حال ارسال
        </label>
        </div>
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
          {filteredOrders.map((order) => (
            <tr key={order.id} className='border hover:bg-[#C2C5AA]'>
              <th>{order.firstName}</th>
              <th>{order.time}</th>
              <th>{order.price} تومن</th>
              <td>{order.case}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  )
}
