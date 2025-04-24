import React, { useEffect, useState } from 'react';
import Input from '../../base/input/page';
import Button from '../../base/button/page';
import { dashboardLocalization } from '@/localization/localization';

interface EditeModallInterface {
  isOpen: boolean;
  onClose: () => void;
  onEdite: (editeProduct: any) => void;
  product:any
}

export default function EditeModall({ isOpen, onClose,onEdite,product }: EditeModallInterface) {
  const { addModal } = dashboardLocalization;

  const [formData, setFormData] = useState({
    name: '',
    category: '',
    image: '',
    headerImg: '',
    athur: '',
    athurPic: '',
    pub: '',
    price: '',
    offer: '',
    pages: '',
    age: '',
    count: '',
    cover: '',
    discription1: '',
    discription2: '',
    discription3: '',
  });

  useEffect(() => {
    if (product) {
      setFormData(product);
    }
  }, [product]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onEdite(formData); 
  };
  if (!isOpen) return null;

  return (
    <div className='fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-black/50 backdrop-blur-sm z-50'>
      <div className="bg-white rounded-xl shadow-xl text-black p-8 w-[600px] max-h-[90vh] overflow-y-auto">
        <button className='cursor-pointer text-red-500 font-bold mb-4' onClick={onClose}>X</button>
        <div className='flex flex-col gap-4 text-xl'>
          <Input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="نام کتاب" label="نام کتاب" className="border p-2 rounded-xl" />
          <select onChange={handleChange} name="category" value={formData.category} className='border border-[1px] p-1 rounded-xl'>
            <option value={addModal.category1}>{addModal.category1}</option>
            <option value={addModal.category2}>{addModal.category2}</option>
            <option value={addModal.category3}>{addModal.category3}</option>
            <option value={addModal.category4}>{addModal.category4}</option>
            <option value={addModal.category5}>{addModal.category5}</option>
          </select>
          <Input type="file" name="image" accept="image/*" placeholder="آدرس عکس اصلی" label="تصویر" className="border p-2 rounded-xl" />
          <Input type="file" name="headerImg" accept="image/*" placeholder="آدرس هدر" label="تصویر هدر" className="border p-2 rounded-xl" />
          <Input type="text" name="athur" value={formData.athur} onChange={handleChange} placeholder="نام نویسنده" label="نویسنده" className="border p-2 rounded-xl" />
          <Input type="file" name="athurPic" accept="image/*" placeholder="عکس نویسنده" label="تصویر نویسنده" className="border p-2 rounded-xl" />
          <Input type="text" name="pub" value={formData.pub} onChange={handleChange} placeholder="ناشر" label="ناشر" className="border p-2 rounded-xl" />
          <Input type="text" name="price" value={formData.price} onChange={handleChange} placeholder="قیمت" label="قیمت" className="border p-2 rounded-xl" />
          <Input type="text" name="offer" value={formData.offer} onChange={handleChange} placeholder="تخفیف" label="تخفیف" className="border p-2 rounded-xl" />
          <Input type="text" name="pages" value={formData.pages} onChange={handleChange} placeholder="تعداد صفحات" label="صفحات" className="border p-2 rounded-xl" />
          <select onChange={handleChange} name="age" value={formData.age} className='border border-[1px] p-1 rounded-xl'>
            <option value={addModal.adult}>{addModal.adult}</option>
            <option value={addModal.young}>{addModal.young}</option>
            <option value={addModal.junior}>{addModal.junior}</option>
          </select>
          <Input type="text" name="count" value={formData.count} onChange={handleChange} placeholder="موجودی" label="موجودی" className="border p-2 rounded-xl" />
          <Input type="text" name="cover" value={formData.cover} onChange={handleChange} placeholder="نوع جلد" label="جلد" className="border p-2 rounded-xl" />

          {/* توضیحات */}
          <textarea name="discription1" value={formData.discription1} onChange={handleChange} placeholder="توضیح ۱" className="border p-2 rounded-xl" />
          <textarea name="discription2" value={formData.discription2} onChange={handleChange} placeholder="توضیح ۲" className="border p-2 rounded-xl" />
          <textarea name="discription3" value={formData.discription3} onChange={handleChange} placeholder="توضیح ۳" className="border p-2 rounded-xl" />

          <Button type="button" onClick={handleSubmit} className="bg-green-600 text-white p-2 rounded-xl" label="ویرایش محصول" />
        </div>
      </div>
    </div>
  );
}
