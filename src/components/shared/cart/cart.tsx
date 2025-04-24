'use client'
import React, { useEffect, useState } from 'react'
import { getProduct } from '@/services/getProduct/page';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styleCartSwiper.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import CardComponent from '../cartComponent/cardComponent';

export default function Cardcontainer() {
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProduct();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);
    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                slidesPerView={5}
                spaceBetween={30}
            >
                {products.map((product: any) => (<SwiperSlide id='SwiperSlide'><CardComponent product={product}/></SwiperSlide>))}
            </Swiper>
        </>
    )

}
