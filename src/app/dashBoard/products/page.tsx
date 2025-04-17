'use client'
import React, { useEffect, useState } from 'react'
import { dashboardLocalization } from '@/localization/localization';
import { FcFullTrash } from "react-icons/fc";
import { FcSurvey } from "react-icons/fc";
import Button from '@/components/base/button/page';
import AddModal from '@/components/addModalProductP/addModal';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '@/services/getProduct/page';
import { setProducts } from '@/redux/reducers/products';
import { AppDispatch, RootState } from '@/redux/store';

export default function page() {
  const { proTabel } = dashboardLocalization
  const products = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch<AppDispatch>()
  const BASE_URL = "http://api.alikooshesh.ir:3000";
  useEffect(() => {
    getProduct().then((res) => dispatch(setProducts(res)))
  }, []);
  console.log("Products:", products);

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
      <div className='flex justify-end'>
        <Button type={'button'} className={'bg-[#414833] text-white rounded-full p-2 text-2xl font-bold cursor-pointer'} label={proTabel.addPro} />
      </div>
      <table className='w-5/6 text-center text-xl p-2 bg-[#A4AC86] rounded-xl text-white shadow-xl'>
        <thead className='p-2 border'>
          <tr>
            <th>{proTabel.image}</th>
            <th>{proTabel.name}</th>
            <th>{proTabel.category}</th>
            <th></th>
          </tr>

        </thead>
        <tbody>
          {currentProducts.map((item: any) => (
            <tr key={item.id} className='border hover:bg-[#C2C5AA]'>
              <th className='w-40'>{`${BASE_URL}${item.image}`}</th>
              <th>{item.name}</th>
              <th>{item.category}</th>
              <th className='p-2 w-40'>
                <span className='flex gap-2 justify-around'>
                  <FcFullTrash className='cursor-pointer' />
                  <FcSurvey className='cursor-pointer' />
                </span>
              </th>
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
      {/* <AddModal /> */}
    </div>
  )
}
