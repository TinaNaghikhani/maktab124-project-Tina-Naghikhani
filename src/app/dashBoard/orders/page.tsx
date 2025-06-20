'use client';
import React, { useEffect, useState } from 'react';
import { dashboardLocalization } from '@/localization/localization';
import { getOrder } from '@/services/getOrder/getOrder';
import DeliverModal from '@/components/modals/deliveredModal/deliverModal';

export default function OrdersTable() {
  const { orderTabel } = dashboardLocalization;
  const [orders, setOrders] = useState<any[]>([]);
  const [filter, setFilter] = useState<'delivered' | 'pending' | 'all'>('all');
  const [filteredDateOrders, setFilteredDateOrders] = useState<any[]>([]);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<any | null>(null);


  const fetchOrders = async () => {
    try {
      const data = await getOrder();
      setOrders(data);
      setFilteredDateOrders(data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };
  useEffect(() => {
    fetchOrders();
  }, []);

  // فیلتر کردن سفارش‌ها بر اساس case
  const filteredOrders =
    filter === 'all'
      ? orders
      : orders.filter((order) =>
        filter === 'delivered'
          ? order.status === 'تحویل داده شد'
          : order.status === 'در حال ارسال'
      );

  useEffect(() => {
    handleFilterChange('defult'); // فیلتر تاریخ را به حالت پیش‌فرض بازنشانی کنید
  }, [filter, orders]);

  const handleFilterChange = (filterValue: string) => {
    let sortedOrders;

    if (filterValue === 'latest') {
      // مرتب‌سازی بر اساس تاریخ صعودی (جدیدترین)
      sortedOrders = [...filteredOrders].sort(
        (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()
      );
    } else if (filterValue === 'newest') {
      // مرتب‌سازی بر اساس تاریخ نزولی (قدیمی‌ترین)
      sortedOrders = [...filteredOrders].sort(
        (a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()
      );
    } else {
      sortedOrders = filteredOrders; // حالت پیش‌فرض
    }

    setFilteredDateOrders(sortedOrders);
  };

  return (
    <div className='flex flex-col gap-10 items-center m-8'>
      {/* رادیو باتن‌ها برای فیلتر */}
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

      {/* جدول */}
      <table className='w-5/6 text-center text-xl p-2 bg-[#A4AC86] rounded-xl text-white shadow-xl'>
        <thead className='p-2 border'>
          <tr>
            <th>{orderTabel.userName}</th>
            <th>
              {orderTabel.time}/
              <select
                name="filter"
                id="filter"
                onChange={(e) => handleFilterChange(e.target.value)}
                className='bg-[#A4AC86] focus:outline-none'
                defaultValue="default"
              >
                <option value="defult" disabled selected hidden>
                  {orderTabel.placeholder}
                </option>
                <option value="latest">{orderTabel.latest}</option>
                <option value="newest">{orderTabel.newest}</option>
              </select>
            </th>
            <th>{orderTabel.price}</th>
            <th>وضعیت</th>
          </tr>
        </thead>
        <tbody>
          {filteredDateOrders.map((order) => (
            <tr key={order.id} className='border hover:bg-[#C2C5AA]'>
              <td className='w-[150px] p-2'>
                {order.user ? `${order.user.name} ${order.user.lName}` : '---'}
              </td>
              
              <td className='w-[150px] p-2'>{new Date(order.createdAt).toLocaleDateString('fa-IR')}</td>
              <td className='w-[150px] p-2'>{Number(order.totalPrice).toLocaleString()} تومن</td>
              <td className='w-[150px] p-2 underline cursor-pointer hover:text-blue-600' onClick={() => { setSelectedOrder(order); setIsOrderModalOpen(true) }}>
                {order.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <DeliverModal refetchOrders={fetchOrders} onClose={() => { setSelectedOrder(null); setIsOrderModalOpen(false) }} order={selectedOrder} isOpen={isOrderModalOpen} />
    </div>
  );
}