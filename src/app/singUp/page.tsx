'use client'

import Input from '@/components/base/input/page'
import React, { FormEvent, useState } from 'react'
import { pageLevelLocalization } from '@/localization/localization'
import Button from '@/components/base/button/page'
import { useRouter } from 'next/navigation'
import Loader from '@/components/shared/loader/loader'
import { singUpUser } from '@/services/postUser/postUser'
import { toast } from 'react-toastify'

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const RegexPassword = /^\d{8,}$/;

export default function SingUpPage() {
  const { singUpPageLoc } = pageLevelLocalization
  const [loader, setLoader] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPassWordError] = useState("")
  const [isSubmit, setIsSubmit] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState("")
  const [confirmPasswordError, setConfirmPasswordError] = useState("")
  const router = useRouter()

  const btnHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmit(true)
    let isValid = true
    if (email === "") {
      setEmailError(singUpPageLoc.errorRequiredEmailInput)
    } else if (!emailRegex.test(email)) {
      setEmailError(singUpPageLoc.errorEmailInput)
      isValid = false
    }
    if (password === "") {
      setPassWordError(singUpPageLoc.errorRequiredPaaswordInput)
    } else if (!RegexPassword.test(password)) {
      setPassWordError(singUpPageLoc.passwordError)
      isValid = false
    }
    if (confirmPassword === "") {
      setConfirmPasswordError(singUpPageLoc.errorRequiredPaaswordInput) // می‌تونی یه پیام مجزا بزاری
      isValid = false
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("رمز عبور با تکرار آن مطابقت ندارد")
      isValid = false
    }
    if (emailRegex.test(email) && RegexPassword.test(password)) {
      if (isValid) {
        try {
          setLoader(true);
          await singUpUser({ email, password });
          router.push('/');
        } catch (error) {
          toast.error("ثبت نام ناموفق دوباره تلاش کنید", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            rtl: true,
          })
          console.error('Signup failed:', error);
        } finally {
          setLoader(false);
        }
      }
    }
  }
  const loginTextHandler = () => {
    setLoader(true)
    router.push("/login")
  }
  return (
    <div className='h-screen flex justify-center items-center'>
      {loader && (
        <div className="bg-gray-600 bg-opacity-5 h-screen w-full absolute inset-0 flex items-center justify-center  z-50">
          <Loader />
        </div>
      )}
      <div className='bg-[#606C38] md:h-[650px] sm:h-[400px] p-6 md:w-1/4 text-white rounded-xl sm:w-1/2'>
        <div className='p-2 border border-[6px] border-[#ffff] border-dotted w-full h-full flex flex-col justify-center items-center gap-4 rounded-xl '>
          <p className='md:text-3xl font-bold sm:text-xl'>{singUpPageLoc.welcome}</p>
          <p className='md:text-2xl font-bold sm:text-xl'>{singUpPageLoc.singUp}</p>
          <form onSubmit={btnHandler} className='w-full p-2 py-4 flex flex-col items-center justify-center'>
            <div className='flex flex-col w-full h-28 gap-0'>
              <Input onChange={((e: any) => setEmail(e.target.value)) as unknown as () => void} placeholder='tina1234@gmail.com' type='text' className={'bg-[#B6AD90] rounded-full p-2 text-[#414833] focus:outline-none'} label={singUpPageLoc.emailLabel} />
              {isSubmit && emailError && <p className="md:text-sm sm:text-xs text-red-500">{emailError}</p>}
            </div>
            <div className='flex flex-col w-full h-28 gap-0'>
              <Input onChange={((e: any) => setPassword(e.target.value)) as unknown as () => void} placeholder='123456789' type='password' className={'bg-[#B6AD90] rounded-full p-2 text-[#414833] focus:outline-none'} label={singUpPageLoc.passwordLabel} />
              {isSubmit && passwordError && <p className="md:text-sm sm:text-xs text-red-500">{passwordError}</p>}
            </div>
            <div className='flex flex-col w-full h-28'>
              <Input onChange={((e: any) => setConfirmPassword(e.target.value)) as unknown as () => void} placeholder='123456789' type='password' className={'bg-[#B6AD90] rounded-full p-2 text-[#414833] focus:outline-none'} label={singUpPageLoc.passwordLabel2} />
              {isSubmit && confirmPasswordError && <p className="md:text-sm sm:text-xs text-red-500">{confirmPasswordError}</p>}
            </div>
            <Button type='submit' className={'bg-white rounded-full p-2 text-2xl font-bold text-black w-40 cursor-pointer'} label={singUpPageLoc.singUpBtn} />
          </form>
          <p>{singUpPageLoc.alredyHaveAnAccount}<button onClick={loginTextHandler} className='hover:cursor-pointer'>{singUpPageLoc.login}</button></p>
        </div>
      </div>

    </div>
  )
}