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
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;
  
    // محاسبه محصولاتی که باید در صفحه فعلی نمایش داده شوند
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  
    // تغییر صفحه
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <div className='flex flex-col gap-10 items-center m-8'>
      <Button type={'button'} className={'bg-[#414833] text-white rounded-full p-2 text-2xl font-bold cursor-pointer'} label={invenTabel.save} />

      <table className='w-5/6 text-center text-xl p-2 bg-[#A4AC86] rounded-xl text-white shadow-xl'>
        <thead className='p-2 border'>
          <tr>
            <th className='w-[150px]'>{invenTabel.product}</th>
            <th className='w-[150px]'>{invenTabel.price}</th>
            <th className='w-[150px]'>{invenTabel.inventory}</th>
          </tr>

        </thead>
        <tbody>
          {currentProducts.map((product) => (
            <tr key={product.id} className="border hover:bg-[#C2C5AA]">
              <th className='w-[150px]'>{product.name}</th>
              <th className='w-[150px]'>{product.price} تومن</th>
              <th className='w-[150px]'>{product.count} عدد</th>
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
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastProduct >= products.length}
          className='bg-[#414833] text-white rounded-full p-2 cursor-pointer disabled:bg-gray-500'
        >
          Next
        </button>
      </div>
    </div>
  )
}
