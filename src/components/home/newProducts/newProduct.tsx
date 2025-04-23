import CartComponent from '@/components/shared/cart/cart'
import React, { useState } from 'react'

export default function NewProduct() {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    return (
        <div className='w-5/6 px-4 py-10 justify-items-center gap-5 grid grid-cols-3 grid-rows-2 border-t-[20px] border-[#606c38] rounded-3xl'>
            <CartComponent />
            <div className='flex gap-4'>
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className='bg-[#414833] text-white rounded-full p-2 cursor-pointer disabled:bg-gray-500'
                >
                    {invenTabel.pre}
                </button>
                <span>{invenTabel.page}{currentPage}</span>
                <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={indexOfLastProduct >= products.length}
                    className='bg-[#414833] text-white rounded-full p-2 cursor-pointer disabled:bg-gray-500'
                >
                    {invenTabel.next}
                </button>
            </div>

        </div>
    )
}
