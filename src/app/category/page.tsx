// 'use client'
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/router';

// const BASE_URL = "http://api.alikooshesh.ir:3000";
// const API_KEY = "booktinaswuIVzBeQZ98DMmOEmjLenHyKzAbG5UJ4PrAHkD3gV4OnOQvlm6Siz9bKUfKzXjaMicQFeZu21VVmwiwUK5I4qoARsmpvsg5PLu3ee1OzY7XvckHXBmdbOmy";

// // گرفتن کتاب‌ها بر اساس دسته‌بندی
// const getBooksByCategory = async (category: string) => {
//     try {
//         const accessToken = localStorage.getItem('accessToken');
//         if (!accessToken) {
//             throw new Error('Access token is missing or expired.');
//         }

//         const result = await axios.get(`${BASE_URL}/api/records/product`, {
//             headers: {
//                 'api_key': API_KEY,
//                 'Authorization': `Bearer ${accessToken}`,
//                 'Content-Type': 'application/json',
//             },
//         });

//         return result.data.records.filter((book: { category: string; }) => book.category === category);  // فیلتر کردن بر اساس دسته‌بندی
//     } catch (error) {
//         console.error("Error fetching books:", error);
//         return [];
//     }
// };

// export default function CategoryPage() {
//     const router = useRouter();
//     const { category } = router.query;  // گرفتن پارامتر از query (مثلاً ?category=fantasy)

//     const [books, setBooks] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     // استفاده از useEffect برای اطمینان از اینکه در محیط کلاینت کد اجرا می‌شود
//     useEffect(() => {
//         if (category) {
//             setLoading(true);
//             setError(null);
//             getBooksByCategory(category as string)  // درخواست برای گرفتن کتاب‌ها
//                 .then((data) => {
//                     setBooks(data);
//                 })
//                 .catch((err) => {
//                     setError('خطا در بارگذاری کتاب‌ها');
//                 })
//                 .finally(() => {
//                     setLoading(false);
//                 });
//         }
//     }, [category]);  // وقتی `category` تغییر کرد، دوباره درخواست می‌دهیم

//     if (loading) {
//         return <div>در حال بارگذاری...</div>;
//     }

//     if (error) {
//         return <div>{error}</div>;
//     }

//     return (
//         <div className="p-6">
//             <h1 className="text-2xl font-bold mb-4">دسته‌بندی: {category}</h1>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 {books.map((book) => (
//                     <div key={book.id} className="p-4 border rounded">
//                         <h2 className="text-lg font-semibold">{book.title}</h2>
//                         <p className="text-sm text-gray-600">{book.author}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
import CardComponent from '@/components/shared/cartComponent/cardComponent'
import React from 'react'

export default function page() {
  return (
    <div>
      <CardComponent/>
    </div>
  )
}
