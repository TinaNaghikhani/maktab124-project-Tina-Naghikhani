'use client'
import React, { useEffect, useState } from 'react'
import { dashboardLocalization } from '@/localization/localization'
import Button from '@/components/base/button/page'
import { getProduct } from '@/services/getProduct/page';

export default function page() {
  const { invenTabel } = dashboardLocalization
  const [products, setProducts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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
      <Button type={'button'} className={'bg-[#414833] text-white rounded-full p-2 text-2xl font-bold cursor-pointer'} label={invenTabel.save} />

      <table className='w-5/6 text-center text-xl p-2 bg-[#A4AC86] rounded-xl text-white shadow-xl'>
        <thead className='p-2 border'>
          <tr>
            <th className='w-[150px] p-2'>{invenTabel.product}</th>
            <th className='w-[150px] p-2'>{invenTabel.price}</th>
            <th className='w-[150px] p-2'>{invenTabel.inventory}</th>
          </tr>

        </thead>
        <tbody>
          {currentProducts.map((product) => (
            <tr key={product.id} className="border hover:bg-[#C2C5AA]">
              <td className='w-[150px] p-2'>{product.name}</td>
              <td className='w-[150px] p-2'>{product.price} تومن</td>
              <td className='w-[150px] p-2'>{product.count} عدد</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='flex gap-4'>
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className='bg-[#414833] text-white rounded-full p-2 cursor-pointer disabled:bg-gray-500'
        >
          {invenTabel.pre}
        </button>
        <span>{invenTabel.page} {currentPage}</span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastProduct >= products.length}
          className='bg-[#414833] text-white rounded-full p-2 cursor-pointer disabled:bg-gray-500'
        >
          {invenTabel.next}
        </button>
      </div>
    </div>
  )
}
