'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import CardComponent from '@/components/shared/cardComponent/cardComponent';
import SwiperComponent from '@/components/shared/swiper/swiper';
import Navbar from '@/components/home/navBar/navbar';
import Loader from '@/components/shared/loader/loader';

const BASE_URL = "http://api.alikooshesh.ir:3000";
const API_KEY = "booktinaswuIVzBeQZ98DMmOEmjLenHyKzAbG5UJ4PrAHkD3gV4OnOQvlm6Siz9bKUfKzXjaMicQFeZu21VVmwiwUK5I4qoARsmpvsg5PLu3ee1OzY7XvckHXBmdbOmy";

const getBooksByCategory = async (category: string) => {
    try {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
            throw new Error('Access token is missing or expired.');
        }

        const result = await axios.get(`${BASE_URL}/api/records/product`, {
            headers: {
                'api_key': API_KEY,
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        });
        if (category === 'همه کتاب ها') {
            return result.data.records;
        }
        return result.data.records.filter((book: { category: string; }) => book.category === category);  // فیلتر کردن بر اساس دسته‌بندی
    } catch (error) {
        console.error("Error fetching books:", error);
        return [];
    }
};

export default function CategoryPage() {
    const searchParams = useSearchParams()
    const category = searchParams.get("category")
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (category) {
            setLoading(true);
            setError(null);
            getBooksByCategory(category as string)  
                .then((data) => {
                    setBooks(data);
                })
                .catch((err) => {
                    return setError('خطا در بارگذاری کتاب‌ها');
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [category]);  

    if (loading) {
        
            return (
                <div className="bg-black opacity-50 h-screen w-full absolute inset-0 flex items-center justify-center z-10">
                    <Loader />
                </div>
            )
    }
    if (error) {
        return <div className='w-full h-full flex justify-center'>{error}</div>;
    }
    console.log(category)
    return (
        <div className="p-6 flex flex-col gap-4 items-center">
            <SwiperComponent />
            <Navbar />
            <div className='w-5/6 px-4 py-10 flex flex-col items-center gap-4 border-t-[20px] border-[#606c38] rounded-3xl'>
                <h1 className="text-4xl font-bold mb-4">{category}</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {books.map((book) => (
                        <CardComponent key={book.id} product={book} />
                    ))}
                </div>

            </div>

        </div>
    );
}
