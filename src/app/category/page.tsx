'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import CardComponent from '@/components/shared/cartComponent/cardComponent';
import Swiper from '@/components/shared/swiper/swiper';

const BASE_URL = "http://api.alikooshesh.ir:3000";
const API_KEY = "booktinaswuIVzBeQZ98DMmOEmjLenHyKzAbG5UJ4PrAHkD3gV4OnOQvlm6Siz9bKUfKzXjaMicQFeZu21VVmwiwUK5I4qoARsmpvsg5PLu3ee1OzY7XvckHXBmdbOmy";

// گرفتن کتاب‌ها بر اساس دسته‌بندی
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

    // استفاده از useEffect برای اطمینان از اینکه در محیط کلاینت کد اجرا می‌شود
    useEffect(() => {
        if (category) {
            setLoading(true);
            setError(null);
            getBooksByCategory(category as string)  // درخواست برای گرفتن کتاب‌ها
                .then((data) => {
                    setBooks(data);
                })
                .catch((err) => {
                    setError('خطا در بارگذاری کتاب‌ها');
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [category]);  // وقتی `category` تغییر کرد، دوباره درخواست می‌دهیم

    if (loading) {
        return <div>در حال بارگذاری...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }
    console.log(category)
    return (
        <div className="p-6 flex flex-col gap-4 items-center">
            <Swiper />
            <div className='w-5/6 px-4 py-10 flex flex-col items-center gap-4 border-t-[20px] border-[#606c38] rounded-3xl'>
                <h1 className="text-4xl font-bold mb-4">{category}</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {books.map((book) => (
                        <CardComponent product={book} />
                    ))}
                </div>

            </div>

        </div>
    );
}
