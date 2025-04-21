import React from 'react'
import Input from '../../base/input/page'
import Button from '../../base/button/page'
import { dashboardLocalization } from '@/localization/localization'

export default function AddModal() {
  const { addModal } = dashboardLocalization
  return (
    <div className='bg-gray-200 z-10 p-10 flex flex-col justify-center items-center w-full h-screen'>
      <div className='bg-white rounded-xl shadow-xl text-black p-8 flex flex-col gap-4 w-96 text-2xl'>
        <Input type={'image'} placeholder={addModal.photo} className={'border border-[1px] p-2 mt-4 rounded-xl'} label={addModal.photoLabel} />
        <Input type={'text'} placeholder={addModal.namePlaceHolder} className={'border border-[1px] p-2 mt-4 rounded-xl'} label={addModal.nameLabel} />
        <select name="category" id="" className='border border-[1px] p-1 rounded-xl'>
          <option value="">{addModal.category1}</option>
          <option value="">{addModal.category2}</option>
          <option value="">{addModal.category3}</option>
          <option value="">{addModal.category4}</option>
          <option value="">{addModal.category5}</option>
          <option value="">{addModal.category6}</option>
        </select>
        <Button type={'button'} className={'bg-green-500 rounded-xl p-2'} label={addModal.addBtn} />

      </div>
    </div>
  )
}
