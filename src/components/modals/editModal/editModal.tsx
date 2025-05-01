import React, { useEffect, useState } from 'react';
import Input from '../../base/input/page';
import Button from '../../base/button/page';
import { dashboardLocalization } from '@/localization/localization';
import { toast } from 'react-toastify';

interface EditeModallInterface {
  isOpen: boolean;
  onClose: () => void;
  onEdite: (editeProduct: any) => void;
  product: any
}

export default function EditeModall({ isOpen, onClose, onEdite, product }: EditeModallInterface) {
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
  const BASE_URL = "http://api.alikooshesh.ir:3000";
  const API_KEY =
    "booktinaswuIVzBeQZ98DMmOEmjLenHyKzAbG5UJ4PrAHkD3gV4OnOQvlm6Siz9bKUfKzXjaMicQFeZu21VVmwiwUK5I4qoARsmpvsg5PLu3ee1OzY7XvckHXBmdbOmy";

  useEffect(() => {
    if (product) {
      setFormData(product);
    }
  }, [product]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("File upload triggered", e.target.name, e.target.files); // دیباگ کردن

    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      toast.error("توکن دسترسی یافت نشد");
      return;
    }

    const { name, files } = e.target;
    if (!files || files.length === 0) return;

    const file = files[0];
    const formDataFile = new FormData();
    formDataFile.append("image", file); // API انتظار کلید "image" دارد

    fetch(`${BASE_URL}/api/files/upload`, {
      method: "POST",
      headers: {
        "api_key": API_KEY,
        "Authorization": `Bearer ${accessToken}`,
      },
      body: formDataFile,
    })
      .then(async (res) => {
        if (!res.ok) {
          const text = await res.text();
          console.error(`HTTP error! status: ${res.status}, body: ${text}`);
          toast.error("خطا در آپلود عکس (کد خطا: " + res.status + ")");
          return;
        }

        const contentType = res.headers.get("content-type");
        if (contentType?.includes("application/json")) {
          const data = await res.json();
          console.log("Response data:", data); // چاپ داده‌های دریافتی

          const formKeyMap: Record<string, string> = {
            image: "image",       // <Input name="image" /> -> key: "image"
            headerImg: "headerImage", // <Input name="headerImg" /> -> key: "headerImage"
            athurPic: "athurPic",     // <Input name="athurPic" /> -> key: "athurPic"
          };

          const formKey = formKeyMap[name] || name;

          // ✅ تغییر این بخش: استفاده از `downloadLink` به جای `url`
          if (data && data.downloadLink) {
            setFormData((prev) => ({
              ...prev,
              [formKey]: data.downloadLink, // ذخیره `downloadLink` در فرم
            }));
            toast.success("عکس با موفقیت آپلود شد");
          } else {
            console.error("Invalid response data:", data);
            toast.error("فرمت پاسخ API اشتباه است");
          }
        } else {
          const text = await res.text();
          console.error("Unexpected response (not JSON):", text);
          toast.error("پاسخ API فرمت نامعتبر است");
        }
      })
      .catch((err) => {
        console.error("Upload error", err);
        toast.error("آپلود عکس با مشکل مواجه شد.");
      })
      .finally(() => {
        e.target.value = ""; // پاک کردن ورودی فایل
      });
  };
  const handleSubmit = () => {
    onEdite(formData);
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
            <Input type="file" name="image" accept="image/*" onChange={handleFileUpload} placeholder="آدرس عکس اصلی" label="تصویر" className="border p-2 rounded-xl" />
            <Input type="file" name="headerImg" accept="image/*" onChange={handleFileUpload} placeholder="آدرس هدر" label="تصویر هدر" className="border p-2 rounded-xl" />
            <Input type="file" name="athurPic" accept="image/*" onChange={handleFileUpload} placeholder="عکس نویسنده" label="تصویر نویسنده" className="border p-2 rounded-xl" />
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
          <Button type="button" onClick={handleSubmit} className="bg-green-600 text-white p-2 rounded-xl" label="ویرایش محصول" />
        </form>
      </div>
    </div>
  );
}
