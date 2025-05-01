import React from 'react'
import Link from 'next/link';


export default function CardComponent({ product }: any) {
    const BASE_URL = "http://api.alikooshesh.ir:3000"
    return (
        <Link href={`/singleProduct/${product.id}`}>
            <div className='w-52 h-64 relative overflow-hidden group'>
                <img
                    src={`${BASE_URL}${product.image}`}
                    alt={product.name}
                    
                    className='w-full h-full object-cover rounded-3xl absolute top-0 left-0 transition-opacity duration-300 group-hover:opacity-0'
                />
                <div className='flex flex-col gap-3 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#B6AD90] w-full h-full rounded-3xl'>

                    <div className='flex flex-col items-start'>
                        <p className='text-2xl text-[#656D4A] font-bold'>{product.name}</p>
                        <hr className='w-5/6 rounded-full h-1 bg-[#7F4F24] border-0 ' />
                        <p className='text-2xl text-[#656D4A] font-bold'>{product.athur}</p>
                        <hr className='w-5/6 rounded-full h-1 bg-[#7F4F24] border-0 ' />
                        <div className='flex flex-col gap-2'>
                            <div className='flex gap-10 p-2 items-around w-full'>
                                <span className='bg-red-700 text-white font-bold text-lg rounded-3xl p-1'>{product.offer}%</span>
                                <span className='text-2xl'>{product.price} تومان</span>
                            </div>
                            {product.offer > 0 && (
                                <span className='self-end text-2xl -mt-2'>
                                    {Math.round(product.price * (1 - product.offer / 100)).toLocaleString()} تومان
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Link>


    )
}
