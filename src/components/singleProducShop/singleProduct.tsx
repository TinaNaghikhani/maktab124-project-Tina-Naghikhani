'use client';

import React, { useRef, useState } from 'react';
import { ProductsInterface } from "@/interfaces/interface";
import { singlePageLoc } from "@/localization/localization";
import { useRouter } from 'next/navigation';
import Loader from '../shared/loader/loader';

interface Props {
    product: ProductsInterface;
}

export default function SingleProductComponent({ product }: Props) {
    const BASE_URL = "http://api.alikooshesh.ir:3000";
    const [loader, setLoader] = useState(false);

    const headerRef = useRef<HTMLImageElement | null>(null);
    const athorRef = useRef<HTMLDivElement | null>(null);
    const buyRef = useRef<HTMLButtonElement | null>(null);

    const scrollToHeader = () => {
        headerRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToAthor = () => {
        athorRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToBuy = () => {
        buyRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const router = useRouter();

    const buyHandler = () => {
        setLoader(true);

        const savedProducts: string[] = JSON.parse(localStorage.getItem("cartProducts") || "[]");

        if (product?.id && !savedProducts.includes(product.id)) {
            savedProducts.push(product.id);
        }

        localStorage.setItem("cartProducts", JSON.stringify(savedProducts));

        router.push("/cart");
    };

    return (
        <div>
            {loader && (
                <div className="fixed inset-0 bg-opacity-70 backdrop-filter backdrop-blur-sm flex items-center justify-center z-50">
                    <Loader />
                </div>
            )}
            <main>
                {product && (
                    <div className='p-4 flex flex-col gap-10'>
                        <img
                            src={`${BASE_URL}${product.headerImg}`}
                            alt="تصویر"
                            className='rounded-3xl'
                            ref={headerRef}
                        />
                        <div className='flex justify-around gap-8 w-full'>
                            <div id='image' className='sticky top-120 left-10 block flex flex-col items-center justift-center gap-4'>
                                <img
                                    src={`${BASE_URL}${product.image}`}
                                    alt="تصویر"
                                    className='w-80 h-80 rounded-3xl'
                                />
                                <div className='w-40 flex flex-col gap-2 justify-center items-center w-5/6 '>
                                    <span onClick={scrollToHeader} className='text-2xl font-semibold text-[#936639] hover:text-[#A4AC86] cursor-pointer'>
                                        {singlePageLoc.header}
                                    </span>
                                    <hr className='w-32 rounded-full mx-10 h-1 bg-[#7F4F24] border-0' />
                                    <span onClick={scrollToAthor} className='text-2xl font-semibold text-[#936639] hover:text-[#A4AC86] cursor-pointer'>
                                        {singlePageLoc.founder}
                                    </span>
                                    <hr className='w-32 rounded-full mx-10 h-1 bg-[#7F4F24] border-0' />
                                    <span onClick={scrollToBuy} className='text-2xl font-semibold text-[#936639] hover:text-[#A4AC86] cursor-pointer'>
                                        {singlePageLoc.buy}
                                    </span>
                                </div>
                            </div>
                            <div className='w-1/2 p-4 flex flex-col gap-2'>
                                <p className='text-5xl font-bold italic text-[#7F4F24] m-4'>{product.name}</p>
                                <hr className='w-full rounded-full mx-10 h-1 bg-[#7F4F24] border-0 ' />
                                <div className='flex gap-8 justify-between items-start'>
                                    <div className='flex flex-col gap-4'>
                                        <span className='text-[#7F4F24] text-2xl font-semibold'>
                                            <span className='font-bold text-3xl text-[#414833]'>{singlePageLoc.athur} </span>{product.athur}
                                        </span>
                                        <span className='text-[#7F4F24] text-2xl font-semibold'>
                                            <span className='font-bold text-3xl text-[#414833]'>{singlePageLoc.pages} </span>{product.pages}
                                        </span>
                                        <span className='text-[#7F4F24] text-2xl font-semibold'>
                                            <span className='font-bold text-3xl text-[#414833]'>{singlePageLoc.cover}</span>َ{product.cover}
                                        </span>
                                        <span className='text-[#7F4F24] text-2xl font-semibold'>
                                            <span className='font-bold text-3xl text-[#414833]'>{singlePageLoc.name}</span>{product.name}
                                        </span>
                                        <span className='text-[#7F4F24] text-2xl font-semibold'>
                                            <span className='font-bold text-3xl text-[#414833]'>{singlePageLoc.category}</span>{product.category} , {product.age}
                                        </span>
                                    </div>
                                    <div className='w-44 flex flex-col gap-4 justify-center items-center p-2'>
                                        {product.publish !== 'future' ? (
                                            <button
                                                ref={buyRef}
                                                onClick={buyHandler}
                                                className='cursor-pointer bg-[#936639] w-40 h-8 rounded-4xl text-white text-xl'
                                            >
                                                {singlePageLoc.order}
                                            </button>
                                        ) : (
                                            <span className='text-xl text-red-600 font-bold'>ناموجود</span>
                                        )}
                                        <div className='flex gap-2 justify-around w-full'>
                                            {Number(product.offer) > 0 && (
                                                <span className='bg-red-700 text-white font-bold text-lg rounded-3xl p-1'>
                                                    {product.offer}%
                                                </span>
                                            )}
                                            <span className='text-2xl'>{product.price} تومان</span>
                                        </div>
                                        {Number(product.offer) > 0 && (
                                            <span className='self-end text-2xl text-green-500'>
                                                {Math.round(Number(product.price) * (1 - Number(product.offer) / 100)).toLocaleString()} تومان
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <hr className='w-full rounded-full mx-10 h-1 bg-[#7F4F24] border-0 ' />
                                <div className='flex flex-col gap-4 text-2xl'>
                                    <p>{product.discription1}</p>
                                    <p>{product.discription2}</p>
                                    <p>{product.discription3}</p>
                                </div>
                                <div ref={athorRef} className='w-full h-96 flex gap-6 justify-start items-center bg-[#C2C5AA] p-6 border-t-10 rounded-2xl border-b-10 border-[#B6AD90]'>
                                    <div className='flex flex-col items-center gap-6 '>
                                        <img
                                            src={`${BASE_URL}${product.athurPic}`}
                                            alt="تصویر"
                                            className='w-40 h-40 rounded-3xl'
                                        />
                                        <p className='text-2xl text-[#7F4F24]'>{product.athur}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
