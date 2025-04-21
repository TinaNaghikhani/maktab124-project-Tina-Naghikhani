import React from 'react'
import { dashboardLocalization } from '@/localization/localization'
import Button from '@/components/base/button/page'

export default function DeletModal() {
  const { deletModal } = dashboardLocalization
  return (
    <div className='bg-gray-200 z-10 p-10 flex flex-col justify-center items-center w-full h-screen '>
      <div className='bg-white rounded-xl shadow-xl text-black p-8'>
        <button className='text-sm cursor-pointer'>X</button>
        <p className='text-3xl font-semibold'>{deletModal.text}</p>
        <div className='flex gap-4 p-4'>
          <Button type={"button"} className={'bg-green-500 p-2 rounded-2xl text-2xl w-32 cursor-pointer'} label={deletModal.accept} />
          <Button type={"button"} className={'bg-red-500 p-2 rounded-2xl text-2xl w-32 cursor-pointer'} label={deletModal.canceled} />
        </div>
      </div>
    </div>
  )
}
