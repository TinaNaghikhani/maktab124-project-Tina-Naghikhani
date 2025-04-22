'use client'
import React, { useState } from 'react'
import { pageLevelLocalization } from '@/localization/localization'
import { GrInstagram } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
    const { footer } = pageLevelLocalization
    const [showText, setShowText] = useState(false)
    const spanhandler = () => {
        setShowText((prev) => !prev)
    }
    return (
        <div className='bg-[#606C38] text-white p-4 justify-between flex-row-reverse items-baseline '>
            <div className='text-xl rounded-2xl border border-[6px] border-[#ffff] border-dotted'>
                <div className='m-8 text-right'>
                    <span>
                        <p>
                            ما بوکتین هستیم، یک دوست کوچک ولی پرانرژی برای عاشقان کتاب!
                            از اون دوست‌هایی که دوست دارن با کتاب‌ها دنیایی جدید کشف کنن و خودشون رو توی صفحات پر از حرف و حدیث غرق کنن. اما… گاهی زمان کم میاره، گاهی حال نیست و گاهی هم کتابی که دنبالش بودین، به راحتی پیدا نمیشه!

                        </p>
                        <p> برای همینه که ما اومدیم تا بوکتین رو براتون راه بندازیم: یک فروشگاه آنلاین که تمام کتاب‌های مورد علاقه‌تون رو در یک جا جمع کرده و به راحتی به دستتون برسونه.
                            ما اعتقاد داریم که «هر کتاب، یک سفر جدید به دنیایی ناشناخته‌است!» و با همین فکر تصمیم گرفتیم بهترین کتاب‌های ایرانی و جهانی رو برای شما عزیزان فراهم کنیم.
                        </p>
                        <p className={`${showText ? '' : 'hidden'}`}>  راستش ما قراره خیلی کارها انجام بدیم:
                            قراره با هر کتابی که به دستتون می‌رسونیم، یه ذره نزدیک‌تر بشیم به شما.
                            قراره با هر صفحه‌ای که می‌خونید، یادتون بدیم که عجله نکنید، زندگی رو لذت ببرید و کتاب‌خوندن رو مثل یه دوست قدیمی دوست داشته باشید.
                            ما قراره یه دوست خیلی خاص براتون باشیم… یه دوستی که همیشه کنارتونه و هر وقت دوست دارید، یه کتاب عالی رو به دستتون می‌ده!
                            قول می‌دیم همیشه کنار شما باشیم و بهترین‌ها رو براتون انتخاب کنیم.</p>
                        <span onClick={spanhandler} className='font-bold cursor-pointer'>{footer.text}</span>
                    </span>

                </div>

                <div className='m-8 flex justify-between flex-row-reverse items-baseline'>
                    <div className='flex flex-col gap-4 justify-center items-end'>
                        <p>{footer.address}</p>
                        <p className='text-2xl'>{footer.number}</p>
                    </div>
                    <div className='flex gap-4'>
                        <GrInstagram className='text-2xl cursor-pointer' />
                        <BsTwitterX className='text-2xl cursor-pointer' />
                        <FaTelegramPlane className='text-2xl cursor-pointer' />
                    </div>


                </div>
            </div>
        </div>
    )
}