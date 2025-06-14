'use client'
import React, { useEffect, useState } from 'react'
import { dashboardLocalization } from '@/localization/localization';
import { FcFullTrash } from "react-icons/fc";
import { FcSurvey } from "react-icons/fc";
import Button from '@/components/base/button/page';
import AddModal from '@/components/modals/addModalProductP/addModal';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '@/services/getProduct/page';
import { setProducts } from '@/redux/reducers/products';
import { AppDispatch, RootState } from '@/redux/store';
import DeletModal from '@/components/modals/deletModalProductPage/deletModal';
import { deleteProduct } from '@/services/deleteProduct';
import { postProduct } from '@/services/postProducts/postProducts';
import EditeModal from '@/components/modals/editModal/editModal';
import { editProduct } from '@/services/editProductProPage/editProduct';

export default function page() {
  const { proTabel } = dashboardLocalization
  const products = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch<AppDispatch>()
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState<number | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditeModalOpen, setIsEditeModalOpen] = useState(false)
  const [productIdToEdite, setProductIdToEdite] = useState<number | null>(null);
  const [productToEdit, setProductToEdit] = useState<any | null>(null);
  const BASE_URL = "http://api.alikooshesh.ir:3000";
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    getProduct().then((res) => dispatch(setProducts(res)))
  }, []);
  console.log("Products:", products);

  const deleteHandler = async () => {
    if (productIdToDelete !== null) {
      try {
        await deleteProduct(productIdToDelete);
        setIsDeleteModalOpen(false);
        setProductIdToDelete(null);
        getProduct().then((res) => dispatch(setProducts(res)))
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };
  const addProduct = () => {
    setIsAddModalOpen(true);
  };

  const handleAddProduct = async (Product: any) => {
    try {
      await postProduct({
        name: Product.name,
        category: Product.category,
        image: Product.image,
        headerImg: Product.headerImg,
        athur: Product.athur,
        athurPic: Product.athurPic,
        pub: Product.pub,
        price: Product.price,
        offer: Product.offer,
        pages: Product.pages,
        age: Product.age,
        count: Product.count,
        cover: Product.cover,
        discription1: Product.discription1,
        discription2: Product.discription2,
        discription3: Product.discription3,
      });
      setIsAddModalOpen(false);
      const updatedProducts = await getProduct();
      dispatch(setProducts(updatedProducts));
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };
  const handleEditProduct = async (editedProduct: any) => {
    try {
      await editProduct(productIdToEdite!, editedProduct); 
      setIsEditeModalOpen(false);
      setProductToEdit(null);
      const updated = await getProduct();
      dispatch(setProducts(updated));
    } catch (error) {
      console.error("خطا در ویرایش محصول:", error);
    }
  };

  return (
    <div className='flex flex-col gap-4 items-center m-8'>
      <div className='flex justify-end'>
        <Button onClick={addProduct} type={'button'} className={'bg-[#414833] text-white rounded-full p-2 text-2xl font-bold cursor-pointer'} label={proTabel.addPro} />
      </div>
      <table className='w-5/6 text-center text-xl p-2 bg-[#A4AC86] rounded-xl text-white shadow-xl'>
        <thead className='p-2 border'>
          <tr>
            <th className='w-40'>{proTabel.image}</th>
            <th className='w-[200px]'>{proTabel.name}</th>
            <th className='w-[150px]'>{proTabel.category}</th>
            <th className='w-40'>{proTabel.actions}</th>
          </tr>
        </thead>
        <tbody className=''>
          {currentProducts.map((item: any) => (
            <tr key={item.id} className='border hover:bg-[#C2C5AA]'>
              <td className=' p-2 flex justify-center'><img src={`${BASE_URL}${item.image}`} alt={item.name} className='w-10' /></td>
              <td className='w-[200px]'>{item.name}</td>
              <td className='w-[150px]'>{item.category}</td>
              <td className='p-2 w-40'>
                <span className='flex gap-2 justify-center'>
                  <FcFullTrash onClick={() => { setProductIdToDelete(item.id); setIsDeleteModalOpen(true) }} className='cursor-pointer' />
                  <FcSurvey onClick={() => {
                    setProductIdToEdite(item.id);
                    setProductToEdit(item);
                    setIsEditeModalOpen(true);
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
          className='bg-[#414833] text-white rounded-full p-2 cursor-pointer disabled:bg-gray-500'
        >
          {proTabel.pre}
        </button>
        <span>{proTabel.page} {currentPage}</span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastProduct >= products.length}
          className='bg-[#414833] text-white rounded-full p-2 cursor-pointer disabled:bg-gray-500'
        >
          {proTabel.next}
        </button>
      </div>
      <DeletModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onDelet={deleteHandler}
      />
      <AddModal onClose={() => setIsAddModalOpen(false)} isOpen={isAddModalOpen} onAdd={handleAddProduct} />
      <EditeModal
        isOpen={isEditeModalOpen}
        onClose={() => setIsEditeModalOpen(false)}
        onEdite={handleEditProduct}
        product={productToEdit}
      />
    </div>
  )
}
