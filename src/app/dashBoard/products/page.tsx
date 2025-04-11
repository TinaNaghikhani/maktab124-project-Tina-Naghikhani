import React from 'react'
import { dashboardLocalization } from '@/localization/localization';
import { FcFullTrash } from "react-icons/fc";
import { FcSurvey } from "react-icons/fc";
import Button from '@/components/base/button/page';

export default function page() {
  const { proTabel } = dashboardLocalization
  return (
    <div className='flex flex-col gap-10 items-center m-8'>
      <table className='w-5/6 text-center text-xl p-2 bg-[#A4AC86] rounded-xl text-white shadow-xl'>
        <thead className='p-2 border'>
            <th>{proTabel.image}</th>
            <th>{proTabel.name}</th>
            <th>{proTabel.category}</th>
            <th></th>
        </thead>
        <tr className='border hover:bg-[#C2C5AA]'>
          <th className='w-40'></th>
          <th>یاغی شن ها</th>
          <th>رمان/فانتزی</th>
          <th className='p-2 w-40'><span className='flex gap-2 justify-around'><FcFullTrash className='hover:colo cursor-pointer'/> <FcSurvey className='hover:colo cursor-pointer'/></span>

          </th>
        </tr>
        <tr className='border hover:bg-[#C2C5AA]'>
          <th className='w-40'></th>
          <th>یاغی شن ها</th>
          <th>رمان/فانتزی</th>
          <th className='p-2 w-40'><span className='flex gap-2 justify-around'><FcFullTrash className='hover:colo cursor-pointer'/> <FcSurvey className='hover:colo cursor-pointer'/></span>

          </th>
        </tr>
        <tr className='border hover:bg-[#C2C5AA]'>
          <th className='w-40'></th>
          <th>یاغی شن ها</th>
          <th>رمان/فانتزی</th>
          <th className='p-2 w-40'><span className='flex gap-2 justify-around'><FcFullTrash className='hover:colo cursor-pointer'/> <FcSurvey className='hover:colo cursor-pointer'/></span>

          </th>
        </tr>
        <tr className='border hover:bg-[#C2C5AA]'>
          <th className='w-40'></th>
          <th>یاغی شن ها</th>
          <th>رمان/فانتزی</th>
          <th className='p-2 w-40'><span className='flex gap-2 justify-around'><FcFullTrash className='hover:colo cursor-pointer'/> <FcSurvey className='hover:colo cursor-pointer'/></span>

          </th>
        </tr>
        <tr className='border hover:bg-[#C2C5AA]'>
          <th className='w-40'></th>
          <th>یاغی شن ها</th>
          <th>رمان/فانتزی</th>
          <th className='p-2 w-40'><span className='flex gap-2 justify-around'><FcFullTrash className='hover:colo cursor-pointer'/> <FcSurvey className='hover:colo cursor-pointer'/></span>

          </th>
        </tr>       
      </table>
            <Button type={'button'} className={'bg-[#414833] text-white rounded-full p-2 text-2xl font-bold'} label={proTabel.addPro} />
      
    </div>
  )
}
