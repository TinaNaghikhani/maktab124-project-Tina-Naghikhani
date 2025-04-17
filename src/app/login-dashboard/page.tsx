'use client'
import Button from '@/components/base/button/page'
import Input from '@/components/base/input/page'
import React, { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation';
import { dashboardLocalization } from "@/localization/localization"
import axios from 'axios';
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function page() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPassWordError] = useState("")
  const [apiError, setApiError] = useState('');
  const [isSubmit, setIsSubmit] = useState(false)
  const router = useRouter()

  const btnHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(),
      setIsSubmit(true)

    if (email === '') {
      setEmailError(loginPage.errorRequiredEmailInput)
    } else if (!emailRegex.test(email)) {
      setEmailError(loginPage.errorEmailInput)
    } else {
      setEmailError('')
    }
    if (emailRegex.test(email)) {
      try {
        const API_KEY = "booktinaswuIVzBeQZ98DMmOEmjLenHyKzAbG5UJ4PrAHkD3gV4OnOQvlm6Siz9bKUfKzXjaMicQFeZu21VVmwiwUK5I4qoARsmpvsg5PLu3ee1OzY7XvckHXBmdbOmy"
        const BASE_URL = "http://api.alikooshesh.ir:3000"
        const response = await axios.post(`${BASE_URL}/api/users/login`,{email,password}, { headers: { api_key: API_KEY } });
        console.log(response.data)
        const { accessToken } = response.data;
        localStorage.setItem('accessToken', accessToken);
        router.push('/dashboard');
      } catch (error: any) {
        if (error.response && error.response.data && error.response.data.message) {
          setApiError(error.response.data.message);
        } else {
          setApiError('An error occurred during login');
        }
      }
    }

  }
  const { loginPage } = dashboardLocalization
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='bg-[#606C38] md:h-[650px] sm:h-[400px] p-6 md:w-1/4 text-white rounded-xl sm:w-1/2'>
        <div className='p-2 border border-[6px] border-[#ffff] border-dotted w-full h-full flex flex-col justify-center items-center gap-4 rounded-xl '>
          <p className='md:text-3xl font-bold sm:text-xl'>{loginPage.welcome}</p>
          <p className='md:text-2xl font-bold sm:text-xl'>{loginPage.login}</p>
          <form onSubmit={btnHandler} className='w-full p-2 py-4 flex flex-col gap-4 items-center justify-center'>
            <div className='flex flex-col w-full'>
              <Input onChange={((e: any) => setEmail(e.target.value)) as unknown as () => void} type={'email'} placeholder={loginPage.emailPlaceholder} className={'bg-[#B6AD90] rounded-full p-2 text-[#414833] focus:outline-none'} label={loginPage.emailLabel} />
              {isSubmit && emailError && <p className="text-xs text-red-500">{emailError}</p>}
            </div>
            <div className='flex flex-col w-full'>
              <Input onChange={((e: any) => setPassword(e.target.value)) as unknown as () => void} type={'password'} placeholder={loginPage.passwordPlaceholder} className={'bg-[#B6AD90] rounded-full p-2 text-[#414833] focus:outline-none'} label={loginPage.passwordLabel} />
              {isSubmit && passwordError && <p className="text-xs text-red-500">{passwordError}</p>}
            </div>

            <Button type={'submit'} className={'bg-white rounded-full p-2 text-2xl font-bold text-black w-40 cursor-pointer'} label={loginPage.buttonLabel} />
          </form>
        </div>
      </div>
    </div>

  )
}
