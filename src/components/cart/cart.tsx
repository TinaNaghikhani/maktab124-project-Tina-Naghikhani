'use client'
import Image from 'next/image'
import { useCart } from '@/context/CartContext';
import { FaTrashAlt } from "react-icons/fa";
import React, { useEffect, useState } from 'react'
import Button from '../base/button/page';
import cartPic from '@/assets/5802902379614554234.png'
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
    removeFromCart,
    setCartItems,
    increaseQty,
    decreaseQty,
} from "@/redux/reducers/cart";

export default function CartComponent() {
    const dispatch = useDispatch();
    const { books: product, quantities, totalPrice } = useSelector((state: RootState) => state.cart);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const BASE_URL = "http://api.alikooshesh.ir:3000"
    const API_KEY =
        "booktinaswuIVzBeQZ98DMmOEmjLenHyKzAbG5UJ4PrAHkD3gV4OnOQvlm6Siz9bKUfKzXjaMicQFeZu21VVmwiwUK5I4qoARsmpvsg5PLu3ee1OzY7XvckHXBmdbOmy"
    const router = useRouter()
    const continiueBuying = () => {
        router.push('/category?category=همه%20کتاب%20ها')
    }
    const increaseQuantity = (id: string | number) => {
        dispatch(increaseQty(id));
    };

    const decreaseQuantity = (id: string | number) => {
        dispatch(decreaseQty(id));
    };

    const handleRemoveProduct = (id: string | number) => {
        dispatch(removeFromCart(id));
        const stored = JSON.parse(localStorage.getItem("cartProducts")!) || [];
        const updated = stored.filter(pid => pid !== id);
        localStorage.setItem("cartProducts", JSON.stringify(updated));
    };

    const getDiscountedPrice = (product: { id?: string | number; price?: any; offer?: any; }) => {
        return Math.round(product.price * (1 - product.offer / 100));
    };

    const getTotalPrice = (product: { id: string | number; }) => {
        const qty = quantities[product.id] || 1;
        return getDiscountedPrice(product) * qty;
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productIds = JSON.parse(localStorage.getItem("cartProducts")!) || [];
                if (!productIds.length) {
                    setError("سبد خرید شما خالی است.");
                    setLoading(false);
                    return;
                }

                const productPromises = productIds.map(async (id) => {
                    const res = await fetch(`${BASE_URL}/api/records/product/${id}`, {
                        headers: {
                            "api_key": API_KEY,
                            "Content-Type": "application/json",
                        },
                    });

                    if (!res.ok) throw new Error(`خطا در دریافت محصول با id ${id}`);
                    return res.json();
                });

                const fetchedProducts = await Promise.all(productPromises);
                dispatch(setCartItems(fetchedProducts));
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <div className='flex flex-col gap-2 justify-center items-center p-8 w-3/4 bg-[#A68A64] text-white text-4xl'>در حال بارگذاری...</div>;
    if (error) return <div className='flex flex-col gap-2 justify-center items-center p-8 w-3/4 bg-[#A68A64] text-white text-4xl'>{error}
        <Button type={"button"} onClick={continiueBuying} className={'cursor-pointer py-1 px-6 text-3xl font-bold bg-[#582F0E] text-white rounded-xl mt-3'} label={'ادامه خرید'} />
    </div>;
    return (
        <div className='flex flex-col gap-2 items-center p-8 w-3/4 bg-[#A68A64] text-white'>
            <Image src={cartPic} alt={'سبد خرید'} className='w-40 -mt-20' />

            {product.map((products) => (

                <div key={products.id} className='w-full border-b-2 border-dotted border-white flex gap-8 py-4'>
                    <img src={`${BASE_URL}${products.image}`} alt={products.name} className='w-40 h-52 rounded-xl' />
                    <div className='flex flex-col gap-4 w-full'>
                        <h2 className='text-4xl font-bold'>{products.name}</h2>
                        <div className='flex gap-10'>
                            <h3 className='text-2xl font-semibold'>قیمت : {Math.round(products.price).toLocaleString()} تومن</h3>
                            <span className='bg-red-700 text-white font-bold text-lg rounded-3xl p-1'>{products.offer}%</span>
                            {products.offer >= 0 && (
                                <span className='self-end text-3xl'>
                                    {Math.round(products.price * (1 - products.offer / 100)).toLocaleString()} تومان
                                </span>
                            )}
                        </div>
                        <div className='w-full flex justify-between'>
                            <div className='flex gap-2 px-4 py-2 rounded-xl text-black'>
                                <button onClick={() => increaseQuantity(products.id)} className='w-8 rounded-xl bg-green-200 text-2xl font-bold text-center cursor-pointer'>+</button>
                                <span className='w-10 rounded-xl bg-green-200 text-2xl font-bold text-center'>{quantities[products.id] || 1}</span>
                                <button onClick={() => decreaseQuantity(products.id)} className='w-8 rounded-xl bg-green-200 text-2xl font-bold text-center cursor-pointer'>-</button>
                                <button onClick={() => handleRemoveProduct(products.id)} className='w-8 rounded-xl bg-red-500 text-xl p-1 font-bold text-center cursor-pointer'><FaTrashAlt className='text-white w-6' /></button>
                            </div>
                            <p className='text-2xl bg-[#A4AC86] rounded-xl p-2'>مجموع قیمت : {getTotalPrice(products).toLocaleString()} تومن</p>
                        </div>
                    </div>
                </div>
            ))}
            <Button type={"button"} onClick={continiueBuying} className={'cursor-pointer py-1 px-6 text-3xl font-bold bg-[#582F0E] text-white rounded-xl mt-3'} label={'ادامه خرید'} />
        </div>
    )
}
