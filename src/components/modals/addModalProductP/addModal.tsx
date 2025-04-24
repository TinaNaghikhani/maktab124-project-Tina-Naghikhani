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

  const initialForm = {
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
  };

  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = 'نام کتاب الزامی است';
    if (!formData.category) newErrors.category = 'دسته‌بندی را انتخاب کنید';
    if (!formData.athur) newErrors.athur = 'نام نویسنده الزامی است';
    if (!formData.price) newErrors.price = 'قیمت الزامی است';
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onAdd(formData);
    setFormData(initialForm);
    setErrors({});
  };

  const BASE_URL = "http://api.alikooshesh.ir:3000";
  const API_KEY = "booktinaswuIVzBeQZ98DMmOEmjLenHyKzAbG5UJ4PrAHkD3gV4OnOQvlm6Siz9bKUfKzXjaMicQFeZu21VVmwiwUK5I4qoARsmpvsg5PLu3ee1OzY7XvckHXBmdbOmy";

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

      fetch(`${BASE_URL}/api/files/upload`, {
        method: "POST",
        headers: {
          "api_key": API_KEY,
          "Authorization": `Bearer ${accessToken}`,
        },
        body: formDataFile,
      })
        .then(async (res) => {
          const data = await res.json();
          setFormData((prev) => ({ ...prev, [name]: data.url }));
        })
        .catch((err) => console.error("Upload error", err));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
      <div className="bg-gradient-to-br from-white to-gray-100 rounded-3xl shadow-2xl text-black p-6 md:p-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto space-y-6">
        <div className="flex justify-between items-center">
          <h2 className='text-3xl font-extrabold text-gray-800'>📚 افزودن محصول جدید</h2>
          <button onClick={onClose} className='text-red-500 text-2xl font-bold hover:scale-110 duration-200'>✖</button>
        </div>

        <div className='grid grid-cols-1 gap-5 text-lg'>
          <Input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="نام کتاب" label="نام کتاب" error={errors.name} className="border p-3 rounded-xl shadow-sm" />

          <div className="flex flex-col gap-1">
            <label className="text-lg font-medium">دسته‌بندی</label>
            <select onChange={handleChange} name="category" value={formData.category} className='border p-3 rounded-xl shadow-sm'>
              <option value="">{addModal.selectCategory}</option>
              <option value={addModal.category1}>{addModal.category1}</option>
              <option value={addModal.category2}>{addModal.category2}</option>
              <option value={addModal.category3}>{addModal.category3}</option>
              <option value={addModal.category4}>{addModal.category4}</option>
              <option value={addModal.category5}>{addModal.category5}</option>
            </select>
            {errors.category && <span className="text-sm text-red-500">{errors.category}</span>}
          </div>

          <Input type="file" name="image" accept="image/*" onChange={handleFileUpload} placeholder="تصویر" label="تصویر کتاب" error="" className="border p-3 rounded-xl" />
          <Input type="file" name="headerImg" accept="image/*" onChange={handleFileUpload} placeholder="تصویر هدر" label="تصویر هدر" error="" className="border p-3 rounded-xl" />
          <Input type="text" name="athur" value={formData.athur} onChange={handleChange} placeholder="نویسنده" label="نویسنده" error={errors.athur} className="border p-3 rounded-xl" />
          <Input type="file" name="athurPic" accept="image/*" onChange={handleFileUpload} placeholder="تصویر نویسنده" label="تصویر نویسنده" error="" className="border p-3 rounded-xl" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input type="text" name="pub" value={formData.pub} onChange={handleChange} placeholder="ناشر" label="ناشر" error="" className="border p-3 rounded-xl" />
            <Input type="text" name="price" value={formData.price} onChange={handleChange} placeholder="قیمت" label="قیمت" error={errors.price} className="border p-3 rounded-xl" />
            <Input type="text" name="offer" value={formData.offer} onChange={handleChange} placeholder="تخفیف" label="تخفیف" error="" className="border p-3 rounded-xl" />
            <Input type="text" name="pages" value={formData.pages} onChange={handleChange} placeholder="تعداد صفحات" label="صفحات" error="" className="border p-3 rounded-xl" />
            <Input type="text" name="count" value={formData.count} onChange={handleChange} placeholder="موجودی" label="موجودی" error="" className="border p-3 rounded-xl" />
            <Input type="text" name="cover" value={formData.cover} onChange={handleChange} placeholder="نوع جلد" label="جلد" error="" className="border p-3 rounded-xl" />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-lg font-medium">رده سنی</label>
            <select onChange={handleChange} name="age" value={formData.age} className='border p-3 rounded-xl'>
              <option value="">{addModal.selectAge}</option>
              <option value={addModal.adult}>{addModal.adult}</option>
              <option value={addModal.young}>{addModal.young}</option>
              <option value={addModal.junior}>{addModal.junior}</option>
            </select>
          </div>

          <div className='flex flex-col gap-3'>
            <textarea name="discription1" value={formData.discription1} onChange={handleChange} placeholder="توضیح ۱" className="border p-3 rounded-xl" />
            <textarea name="discription2" value={formData.discription2} onChange={handleChange} placeholder="توضیح ۲" className="border p-3 rounded-xl" />
            <textarea name="discription3" value={formData.discription3} onChange={handleChange} placeholder="توضیح ۳" className="border p-3 rounded-xl" />
          </div>

          <div className='flex justify-end'>
            <Button type="button" onClick={handleSubmit} className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 shadow-md transition-all duration-200" label="📘 افزودن محصول" />
          </div>
        </div>
      </div>
    </div>
  );
}