// 'use client';
// import React, { useEffect, useState } from 'react';
// import { dashboardLocalization } from '@/localization/localization';
// import { getOrder } from '@/services/getOrder/getOrder';

// export default function OrdersTable() {
//   const { orderTabel } = dashboardLocalization;
//   const [orders, setOrders] = useState<any[]>([]);
//   const [filter, setFilter] = useState<'delivered' | 'pending' | 'all'>('all');
//   const [filteredDateOrders, setFilteredDateOrders] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const data = await getOrder();

//         // تبدیل مقادیر case به مقادیر استاندارد
//         const transformedData = data.map((order: any) => ({
//           ...order,
//           case: order.case === 'تحویل شد' ? 'delivered' : 'pending',
//         }));

//         setOrders(transformedData);
//         setFilteredDateOrders(transformedData);
//       } catch (error) {
//         console.error('Error fetching orders:', error);
//       }
//     };

//     fetchOrders();
//   }, []);

//   // فیلتر کردن سفارش‌ها بر اساس case
//   const filteredOrders =
//     filter === 'all'
//       ? orders
//       : orders.filter((order) => order.case === filter);

//   useEffect(() => {
//     handleFilterChange('defult'); // فیلتر تاریخ را به حالت پیش‌فرض بازنشانی کنید
//   }, [filter]);
//   const handleFilterChange = (filterValue: string) => {
//     let sortedOrders;

//     if (filterValue === 'latest') {
//       // مرتب‌سازی بر اساس تاریخ صعودی (جدیدترین)
//       sortedOrders = [...filteredOrders].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
//     } else if (filterValue === 'newest') {
//       // مرتب‌سازی بر اساس تاریخ نزولی (قدیمی‌ترین)
//       sortedOrders = [...filteredOrders].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
//     } else {
// sortedOrders = filteredOrders; // حالت پیش‌فرض
//     }

//     setFilteredDateOrders(sortedOrders);
//   };
//   return (
//     <div className='flex flex-col gap-10 items-center m-8'>
//       <div className='flex gap-4 mb-4'>
//         <label>
//           <input
//             type='radio'
//             name='filter'
//             value='all'
//             checked={filter === 'all'}
//             onChange={() => setFilter('all')}
//           />
//           همه
//         </label>
//         <label>
//           <input
//             type='radio'
//             name='filter'
//             value='delivered'
//             checked={filter === 'delivered'}
//             onChange={() => setFilter('delivered')}
//           />
//           تحویل داده شده
//         </label>
//         <label>
//           <input
//             type='radio'
//             name='filter'
//             value='pending'
//             checked={filter === 'pending'}
//             onChange={() => setFilter('pending')}
//           />
//           در حال ارسال
//         </label>
//       </div>
//       <table className='w-5/6 text-center text-xl p-2 bg-[#A4AC86] rounded-xl text-white shadow-xl'>
//         <thead className='p-2 border'>
//           <tr>
//             <th>{orderTabel.userName}</th>
//             <th>{orderTabel.time}/
//               <select name="filter" id="filter" onChange={(e) => handleFilterChange(e.target.value)} className='bg-[#A4AC86] focus:outline-none'>
//                 <option value="defult" disabled selected hidden>{orderTabel.placeholder}</option>
//                 <option value="latest">{orderTabel.latest}</option>
//                 <option value="newest">{orderTabel.newest}</option>
//               </select></th>
//             <th>{orderTabel.price}</th>
//             <th>وضعیت</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredDateOrders.map((order) => (
//             <tr key={order.id} className='border hover:bg-[#C2C5AA]'>
//               <td className='w-[150px] p-2'>{order.firstName}</td>
//               <td className='w-[150px] p-2'>{order.time}</td>
//               <td className='w-[150px] p-2'>{order.price} تومن</td>
//               <td className='w-[150px] p-2'>{order.case === 'delivered' ? 'تحویل داده شده' : 'در حال ارسال'}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

'use client';
import React, { useEffect, useState } from 'react';
import { dashboardLocalization } from '@/localization/localization';
import { getOrder } from '@/services/getOrder/getOrder';

export default function OrdersTable() {
  const { orderTabel } = dashboardLocalization;
  const [orders, setOrders] = useState<any[]>([]);
  const [filter, setFilter] = useState<'delivered' | 'pending' | 'all'>('all');
  const [filteredDateOrders, setFilteredDateOrders] = useState<any[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getOrder();

        // تبدیل مقادیر case به مقادیر استاندارد
        const transformedData = data.map((order: any) => ({
          ...order,
          case: order.case === 'تحویل شد' ? 'delivered' : 'pending',
        }));

        setOrders(transformedData);
        setFilteredDateOrders(transformedData); // تنظیم اولیه
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  // فیلتر کردن سفارش‌ها بر اساس case
  const filteredOrders =
    filter === 'all'
      ? orders
      : orders.filter((order) => order.case === filter);

  useEffect(() => {
    handleFilterChange('defult'); // فیلتر تاریخ را به حالت پیش‌فرض بازنشانی کنید
  }, [filter]);

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
              <td className='w-[150px] p-2'>{order.firstName}</td>
              <td className='w-[150px] p-2'>{order.time}</td>
              <td className='w-[150px] p-2'>{order.price} تومن</td>
              <td className='w-[150px] p-2'>
                {order.case === 'delivered' ? 'تحویل داده شده' : 'در حال ارسال'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}