import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import fantasy from '@/assets/fantasy.jpg';
import old from '@/assets/old.jpg';
import litrituer from '@/assets/litriture.jpg';
import novel from '@/assets/novel.jpg';
import allProduct from '@/assets/Picsart_25-04-23_11-47-37-966.jpg'
const categories = [
    { name: 'فانتزی', image: fantasy },
    { name: 'ادبیات کلاسیک', image: old },
    { name: 'همه کتاب ها', image: allProduct },
    { name: 'ادبی', image: litrituer },
    { name: 'رمان', image: novel },
];

export default function Navbar() {
    return (
        <div className="bg-[#A68A64] w-full h-18 rounded-4xl mb-20">
            <nav className="flex -mt-24">
                {categories.map((category) => (
                    <Link key={category.name} href={`/category?category=${category.name}`}>
                        <Image src={category.image} alt={category.name} />
                    </Link>
                ))}
            </nav>
        </div>
    );
}
