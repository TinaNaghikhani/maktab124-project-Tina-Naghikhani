'use client'

import Input from '@/components/base/input/page'
import { FormEvent, useState } from 'react'
import { pageLevelLocalization } from '@/localization/localization'
import Button from '@/components/base/button/page'
import { useRouter } from 'next/navigation';
import Loader from '@/components/shared/loader/loader';
import axios from 'axios'

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function LoginPage() {
  const { loginPage }=pageLevelLocalization;
  const [loader, setLoader] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [apiError, setApiError] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const router = useRouter()
  const singUpBtnHandler = () => {
    setLoader(true)
    router.push("/singUp")
  }
  const btnHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmit(true)
    if (!emailRegex.test(email)) {
      setEmailError(loginPage.emailError)
    } else {
      setEmailError("")
    }
    if (emailRegex.test(email)) {
      try {
        const API_KEY = ""
        const BASE_URL = "http://api.alikooshesh.ir:3000"
        setLoader(true);
        const response = await axios.post(`${BASE_URL}/api/users/login`, {
          email,
          password,
        }, { headers: { api_key: API_KEY } });
        console.log(response.data)
        const { accessToken } = response.data;

        localStorage.setItem('AccessToken', accessToken);

        router.push('/');
      } catch (error: any) {
        if (error.response && error.response.data && error.response.data.message) {
          setApiError(error.response.data.message);
        } else {
          setApiError('An error occurred during login');
        }
      } finally {
        setLoader(false);
      }
    };
  }
  return (
    <div className='bg-stone-200 h-screen flex justify-center items-center'>
      {loader && (
        <div className="bg-gray-600 h-screen w-full absolute inset-0 flex items-center justify-center bg-opacity-50 z-50">
          <Loader />
        </div>
      )}
      <div className='md:h-[650px] sm:h-[400px] p-6 flex flex-col gap-8 items-center justify-center bg-stone-800 md:w-1/4 text-white rounded-xl sm:w-1/2'>
        <p className='md:text-2xl font-bold sm:text-xl'>{loginPage.welcome}</p>
        <p className='md:text-xl font-bold sm:text-lg'>{loginPage.login}</p>
        <form onSubmit={btnHandler} className='w-full p-2 py-4 flex flex-col gap-4 items-center justify-center'>
          <div className='flex flex-col gap-2 w-full'>
            <Input onChange={((e: any) => setEmail(e.target.value)) as unknown as () => void} placeholder='tina1234@gmail.com' type='text' className='w-full text-black mt-2 p-2 shadow-lg bg-white rounded-lg focus:' label={''} />
            {isSubmit && emailError && <p className="text-xs text-red-500">{emailError}</p>}
          </div>
          <div className='flex flex-col gap-2 w-full'>
            <Input onChange={((e: any) => setPassword(e.target.value)) as unknown as () => void} placeholder='123456789' type='password' className='w-full text-black mt-2 p-2 shadow-lg bg-white rounded-lg focus:' label={''} />
            {isSubmit && passwordError && <p className="text-xs text-red-500">{passwordError}</p>}
          </div>
          <Button type={'submit'} className={''} label={''}>{loginPage.loginBtn}</Button>
        </form>
        <p>{loginPage.alredyHaveAnAccount}<button onClick={singUpBtnHandler} className='hover:cursor-pointer'>{loginPage.sinUp}</button></p>
      </div>
    </div>
  )
}

export default LoginPage