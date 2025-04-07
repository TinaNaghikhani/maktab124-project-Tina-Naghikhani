import Button from '@/components/base/button/page'
import Input from '@/components/base/input/page'
import React from 'react'
import { dashboardLocalization } from "@/localization/localization"
export default function page() {
  const { loginPage } = dashboardLocalization
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='bg-[#606C38] md:h-[650px] sm:h-[400px] p-6 md:w-1/4 text-white rounded-xl sm:w-1/2'>
        <div className='p-2 border border-[6px] border-[#ffff] border-dotted w-full h-full flex flex-col justify-center items-center gap-4 rounded-xl '>
          <p className='md:text-3xl font-bold sm:text-xl'>{loginPage.welcome}</p>
          <p className='md:text-2xl font-bold sm:text-xl'>{loginPage.login}</p>
          <form className='w-full p-2 py-4 flex flex-col gap-4 items-center justify-center'>
            <Input type={'email'} placeholder={loginPage.emailPlaceholder} className={'bg-[#B6AD90] rounded-full p-2 text-[#414833] focus:outline-none'} label={loginPage.emailLabel} />
            <Input type={'password'} placeholder={loginPage.passwordPlaceholder} className={'bg-[#B6AD90] rounded-full p-2 text-[#414833] focus:outline-none'} label={loginPage.passwordLabel} />
            <Button type={'submit'} className={'bg-white rounded-full p-2 text-2xl font-bold text-black w-40'} label={loginPage.buttonLabel} />
          </form>
        </div>
      </div>
    </div>

  )
}
