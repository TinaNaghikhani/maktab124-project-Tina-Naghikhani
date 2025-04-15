'use client'
import React, { useEffect } from 'react'
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
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    getProduct().then((res) => dispatch(setProducts(res)))
  }, []);
  console.log("Products:", products);
  return (
    <div className='flex flex-col gap-10 items-center m-8'>
      <table className='w-5/6 text-center text-xl p-2 bg-[#A4AC86] rounded-xl text-white shadow-xl'>
        <thead className='p-2 border'>
          <th>{proTabel.image}</th>
          <th>{proTabel.name}</th>
          <th>{proTabel.category}</th>
          <th></th>
        </thead>
        <tbody>
          {products.map((item: any) => (
            <tr key={item.id} className='border hover:bg-[#C2C5AA]'>
              <th className='w-40'>{item.image}</th>
              <th>{item.name}</th>
              <th>{item.category}</th>
              <th className='p-2 w-40'><span className='flex gap-2 justify-around'><FcFullTrash className='cursor-pointer' /> <FcSurvey className='cursor-pointer' /></span>

              </th>
            </tr>
          ))}
        </tbody>
      </table>
      <Button type={'button'} className={'bg-[#414833] text-white rounded-full p-2 text-2xl font-bold cursor-pointer'} label={proTabel.addPro} />
      <AddModal />
    </div>
  )
}
