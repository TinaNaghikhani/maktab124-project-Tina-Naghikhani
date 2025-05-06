import FutureProducts from '@/components/home/futureProducts/futureProducts'
import Navbar from '@/components/home/navBar/navbar'
import NewProduct from '@/components/home/newProducts/newProduct'
import Footer from '@/components/shared/footer/page'
import Header from '@/components/shared/header/page'
import React from 'react'
import SwiperComponent from '@/components/shared/swiper/swiper'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className="flex-grow p-8 m-10 flex justify-center items-center gap-4 flex-col">
        <SwiperComponent />
        <Navbar />
        <NewProduct />
        <FutureProducts />
      </main>
      <Footer />
    </div >
  )
}