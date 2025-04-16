'use client'
import React, { useEffect, useState } from 'react'
import { dashboardLocalization } from '@/localization/localization'
import Button from '@/components/base/button/page'
import { getProduct } from '@/services/getProduct/page';

export default function page() {
  const { invenTabel } = dashboardLocalization
  const [products, setProducts] = useState<any[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProduct();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className='flex flex-col gap-10 items-center m-8'>
      <table className='w-5/6 text-center text-xl p-2 bg-[#A4AC86] rounded-xl text-white shadow-xl'>
        <thead className='p-2 border'>
          <tr>
            <th>{invenTabel.product}</th>
            <th>{invenTabel.price}</th>
            <th>{invenTabel.inventory}</th>
          </tr>

        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border hover:bg-[#C2C5AA]">
              <td>{product.name}</td>
              <td>{product.price} تومن</td>
              <td>{product.count} عدد</td>
            </tr>
          ))}

        </tbody>

      </table>
      <Button type={'button'} className={'bg-[#414833] text-white rounded-full p-2 text-2xl font-bold cursor-pointer'} label={invenTabel.save} />
    </div>
  )
}
