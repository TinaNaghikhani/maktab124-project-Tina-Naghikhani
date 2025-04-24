'use client'
import React, { useEffect, useState } from 'react'
import { dashboardLocalization } from '@/localization/localization'
import { getProduct } from '@/services/getProduct/page';
import InventoryEditeModal from '@/components/modals/inventoryEdite/inventoruEdite';
import { FcSurvey } from "react-icons/fc";
import { PutProduct } from '@/services/putProductInventory/page';

export default function page() {
  const { invenTabel } = dashboardLocalization
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [productIdToEdit, setProductIdToEdit] = useState<number | null>(null);
  const [products, setProducts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
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
  const handleEditClick = async (id: number) => {
    try {
      const selected = products.find((product) => product.id === id);
      if (selected) {
        setSelectedProduct(selected);
        setIsEditModalOpen(true);
      }
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };
  const handleSave = async (updatedData: { name?: string; price?: number; count?: number }) => {
    if (!productIdToEdit) return;

    try {
      await PutProduct(productIdToEdit, updatedData);
      const updatedProducts = products.map((product) =>
        product.id === productIdToEdit ? { ...product, ...updatedData } : product
      );
      setProducts(updatedProducts);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };
  return (
    <div className='flex flex-col gap-10 items-center m-8'>
      <InventoryEditeModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedProduct(null);
        }}
        onSave={handleSave}
        product={selectedProduct || { id: 0, name: '', price: 0, count: 0 }}
      />
      <table className='w-5/6 text-center text-xl p-2 bg-[#A4AC86] rounded-xl text-white shadow-xl'>
        <thead className='p-2 border'>
          <tr>
            <th className='w-[150px] p-2'>{invenTabel.product}</th>
            <th className='w-[150px] p-2'>{invenTabel.price}</th>
            <th className='w-[150px] p-2'>{invenTabel.inventory}</th>
            <th className='w-[150px] p-2'>{invenTabel.acction}</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product) => (
            <tr key={product.id} className="border hover:bg-[#C2C5AA]">
              <td className='w-[150px] p-2'>{product.name}</td>
              <td className='w-[150px] p-2'>{product.price} تومن</td>
              <td className='w-[150px] p-2'>{product.count} عدد</td>
              <td className='p-2 w-40'>
                <span className='flex gap-2 justify-center'>
                  <FcSurvey onClick={() => {
                    setProductIdToEdit(product.id);
                    setIsEditModalOpen(true);
                    handleEditClick(product.id);
                  }} className='cursor-pointer' />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='flex gap-4'>
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className='bg-[#414833] text-white rounded-full p-2 cursor-pointer disabled:bg-gray-500'>
          {invenTabel.pre}
        </button>
        <span>{invenTabel.page} {currentPage}</span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastProduct >= products.length}
          className='bg-[#414833] text-white rounded-full p-2 cursor-pointer disabled:bg-gray-500'>
          {invenTabel.next}
        </button>
      </div>
    </div>
  )
}
