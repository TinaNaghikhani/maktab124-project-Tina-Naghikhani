'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Pagination, Autoplay } from 'swiper/modules';
import slid1 from '@/assets/swiper2.jpg'
import slid2 from '@/assets/swiper3.jpg'
import slid3 from '@/assets/swiper4.jpg'
import slid4 from '@/assets/swiper1.jpg'
import Image from 'next/image';

export default function SwiperComponent() {
    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (
        <>
            <Swiper id='Swiper'
                pagination={pagination}
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide id='SwiperSlide'><Image src={slid1} alt={'slid1'} /></SwiperSlide>
                <SwiperSlide id='SwiperSlide'><Image src={slid2} alt={'slid2'} /></SwiperSlide>
                <SwiperSlide id='SwiperSlide'><Image src={slid3} alt={'slid3'} /></SwiperSlide>
                <SwiperSlide id='SwiperSlide'><Image src={slid4} alt={'slid4'} /></SwiperSlide>


            </Swiper>
        </>
    )

}
