import React from 'react'
import Input from '../../base/input/page'
import Button from '../../base/button/page'
import { dashboardLocalization } from '@/localization/localization'
interface EditModalInterface {
  isOpen: boolean;
  onClose: () => void;

}
export default function AddModal({ isOpen, onClose }: EditModalInterface) {
  const { addModal } = dashboardLocalization
  if (!isOpen) {
    return null
  }
  return (
    <div className='fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-black/50 backdrop-blur-sm'>
      <div className="bg-white rounded-xl shadow-xl text-black p-8 w-[400px] max-w-full">
        <button className='corsur-pointer' onClick={onClose}>X</button>
        <div className='flex flex-col gap-4 text-2xl'>
          <Input type={'image'} placeholder={addModal.photo} className={'border border-[1px] p-2 mt-4 rounded-xl'} label={addModal.photoLabel} />
          <Input type={'text'} placeholder={addModal.namePlaceHolder} className={'border border-[1px] p-2 mt-4 rounded-xl'} label={addModal.nameLabel} />
          <select name="category" id="" className='border border-[1px] p-1 rounded-xl'>
            <option value="">{addModal.category1}</option>
            <option value="">{addModal.category2}</option>
            <option value="">{addModal.category3}</option>
            <option value="">{addModal.category4}</option>
            <option value="">{addModal.category5}</option>
          </select>
          <div className='flex flex-col'>
            <label htmlFor="textarea">{addModal.discriptionLabel}</label>
            <textarea name="discription" id="" className='border border-[1px] p-2 mt-4 rounded-lg'></textarea>
          </div>
          <Button type={'button'} className={'bg-green-500 rounded-xl p-2'} label={addModal.addBtn} />
        </div>
      </div>
    </div>
  )
}
