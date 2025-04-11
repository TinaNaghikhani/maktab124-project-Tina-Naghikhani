import React from 'react'
import { dashboardLocalization } from '@/localization/localization'
import Button from '@/components/base/button/page'
export default function page() {
  const { invenTabel } = dashboardLocalization
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
        <tr className='border hover:bg-[#C2C5AA]'>
          <th>یاغی شن ها</th>
          <th>200تومن</th>
          <th>30 عدد</th>
        </tr>
        <tr className='border hover:bg-[#C2C5AA]'>
          <th>تاج دوقلوها</th>
          <th>500 تومن</th>
          <th>10 عدد</th>
        </tr>
        <tr className='border hover:bg-[#C2C5AA]'>
          <th>ناتوان</th>
          <th>800 تومن</th>
          <th>5 عدد</th>
        </tr>
      </table>
      <Button type={'button'} className={'bg-[#414833] text-white rounded-full p-2 text-2xl font-bold'} label={invenTabel.save} />
    </div>
  )
}
