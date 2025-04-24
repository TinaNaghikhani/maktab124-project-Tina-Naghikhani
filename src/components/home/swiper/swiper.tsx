'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Pagination,Autoplay } from 'swiper/modules';
import slid1 from'@/assets/Picsart_25-04-23_12-53-15-787.jpg'
import slid2 from '@/assets/Picsart_25-04-23_12-53-33-808.jpg'
import slid3 from '@/assets/Picsart_25-04-23_12-54-13-045.jpg'
import slid4 from '@/assets/Picsart_25-04-23_12-54-41-972.jpg'
import slid5 from '@/assets/Picsart_25-04-23_12-54-58-438.jpg'
import slid6 from '@/assets/Picsart_25-04-23_12-55-14-468.jpg'
import Image from 'next/image';

export default function Cardcontainer() {
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
                    delay:2000,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide id='SwiperSlide'><Image src={slid1} alt={''}/></SwiperSlide>
                <SwiperSlide id='SwiperSlide'><Image src={slid2} alt={''}/></SwiperSlide>
                <SwiperSlide id='SwiperSlide'><Image src={slid3} alt={'slide3'}/></SwiperSlide>
                <SwiperSlide id='SwiperSlide'><Image src={slid4} alt={''}/></SwiperSlide>
                <SwiperSlide id='SwiperSlide'><Image src={slid5} alt={''}/></SwiperSlide>
                <SwiperSlide id='SwiperSlide'><Image src={slid6} alt={''}/></SwiperSlide>

            </Swiper>
        </>
    )

}
