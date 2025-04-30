import React, { useState } from 'react';
import Input from '../../base/input/page';
import Button from '../../base/button/page';
import { dashboardLocalization } from '@/localization/localization';

interface addModalInterface {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (newProduct: any) => void;
}

export default function AddModal({ isOpen, onClose, onAdd }: addModalInterface) {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onAdd(formData);
    setFormData({ 
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
  };
  const BASE_URL = "http://api.alikooshesh.ir:3000";
  const API_KEY =
    "booktinaswuIVzBeQZ98DMmOEmjLenHyKzAbG5UJ4PrAHkD3gV4OnOQvlm6Siz9bKUfKzXjaMicQFeZu21VVmwiwUK5I4qoARsmpvsg5PLu3ee1OzY7XvckHXBmdbOmy";
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      throw new Error("Access token is missing or expired.");
    }
    const { name, files } = e.target;
    if (files && files.length > 0) {
      const file = files[0];
      const formDataFile = new FormData();
      formDataFile.append("file", file);
      console.log([...formDataFile.entries()]);
      // فرضاً یه API داری به اسم /upload که عکس رو می‌فرسته
      fetch(`${BASE_URL}/api/files/upload`, {
        method: "POST",
        headers: {
          "api_key": API_KEY,
          "Authorization": `Bearer ${accessToken}`,
        },
        body: formDataFile,
      })
        .then(async (res) => {
          const contentType = res.headers.get("content-type");
          if (contentType && contentType.includes("application/json")) {
            const data = await res.json();
            setFormData((prev) => ({ ...prev, [name]: data.url }));
          } else {
            const text = await res.text();
            console.error("Unexpected response (not JSON):", text);
          }
        })
        .catch((err) => console.error("Upload error", err));
    }
  };

  if (!isOpen) return null;

  return (
    <div className='fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-black/50 backdrop-blur-sm z-50'>
      <div className="rounded-xl shadow-xl text-[#333D29] p-8 w-[900px] max-h-[90vh] overflow-y-auto bg-[#A4AC86] ">
        <button className='cursor-pointer text-red-500 font-bold mb-4' onClick={onClose}>X</button>
        <form className='grid grid-cols-3 items-center justify-center gap-6 text-xl '>
          <Input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="نام کتاب" label="نام کتاب" className="border p-2 rounded-xl" />
          <select onChange={handleChange} name="category" value={formData.category} className='h-11 mt-3 border border-[1px] p-1 rounded-xl'>
            <option value={addModal.category1}>{addModal.category1}</option>
            <option value={addModal.category2}>{addModal.category2}</option>
            <option value={addModal.category3}>{addModal.category3}</option>
            <option value={addModal.category4}>{addModal.category4}</option>
            <option value={addModal.category5}>{addModal.category5}</option>
          </select>
          <Input type="text" name="cover" value={formData.cover} onChange={handleChange} placeholder="نوع جلد" label="جلد" className="border p-2 rounded-xl" />
          <Input type="text" name="pub" value={formData.pub} onChange={handleChange} placeholder="ناشر" label="ناشر" className="border p-2 rounded-xl" />
          <Input type="text" name="price" value={formData.price} onChange={handleChange} placeholder="قیمت" label="قیمت" className="border p-2 rounded-xl" />
          <Input type="text" name="athur" value={formData.athur} onChange={handleChange} placeholder="نام نویسنده" label="نویسنده" className="border p-2 rounded-xl" />
          <div className='grid grid-cols-3 col-span-3 gap-4 text-sm'>
            <Input type="file" name="image" accept="image/*" onChange={handleFileUpload}  label="تصویر" className="border p-2 rounded-xl" />
            <Input type="file" name="headerImg" accept="image/*" onChange={handleFileUpload} label="تصویر هدر" className="border p-2 rounded-xl" />
            <Input type="file" name="athurPic" accept="image/*" onChange={handleFileUpload} label="تصویر نویسنده" className="border p-2 rounded-xl" />
          </div>
          <Input type="text" name="offer" value={formData.offer} onChange={handleChange} placeholder="تخفیف" label="تخفیف" className="border p-2 rounded-xl" />
          <Input type="text" name="pages" value={formData.pages} onChange={handleChange} placeholder="تعداد صفحات" label="صفحات" className="border p-2 rounded-xl" />
          <select onChange={handleChange} name="age" value={formData.age} className='h-11 mt-3 border border-[1px] p-1 rounded-xl'>
            <option value={addModal.adult}>{addModal.adult}</option>
            <option value={addModal.young}>{addModal.young}</option>
            <option value={addModal.junior}>{addModal.junior}</option>
          </select>
          <Input type="text" name="count" value={formData.count} onChange={handleChange} placeholder="موجودی" label="موجودی" className="border p-2 rounded-xl" />
          <div className='grid col-span-3 gap-6'>
            <textarea name="discription1" value={formData.discription1} onChange={handleChange} placeholder="توضیح ۱" className="border p-2 rounded-xl" />
            <textarea name="discription2" value={formData.discription2} onChange={handleChange} placeholder="توضیح ۲" className="border p-2 rounded-xl" />
            <textarea name="discription3" value={formData.discription3} onChange={handleChange} placeholder="توضیح ۳" className="border p-2 rounded-xl" />
          </div>
          <Button type="button" onClick={handleSubmit} className="bg-green-600 text-white p-2 rounded-xl" label="افزودن محصول" />
        </form>
      </div>
    </div>
  );
}
