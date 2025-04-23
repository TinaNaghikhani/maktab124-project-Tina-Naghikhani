import React, { useEffect, useState } from 'react'
import Input from '../../base/input/page'
import Button from '../../base/button/page'
import { dashboardLocalization } from '@/localization/localization'
import { EditModalInterface } from '@/interfaces/interface'

export default function InventoryEditeModal({ isOpen, onClose, onSave, product }: EditModalInterface) {
    const { invenTabel } = dashboardLocalization
    const [formData, setFormData] = useState({
        name: '',
        price: 0,
        count: 0,
    });

    useEffect(() => {
        if (product) {
            setFormData({
                name: product.name || '',
                price: product.price || 0,
                count: product.count || 0,
            });
        }
    }, [product]);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleSave = () => {
        onSave(formData);
        onClose();
    };
    if (!isOpen) {
        return null
    }
    return (
        <div className='fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-black/50 backdrop-blur-sm'>
            <div className="bg-white rounded-xl shadow-xl text-black p-8 w-[400px] max-w-full">
                <button className='corsur-pointer' onClick={onClose}>X</button>
                <div className='flex flex-col gap-4 text-2xl'>
                    <Input
                        type={'text'}
                        placeholder={''}
                        className={'border border-[1px] p-2 mt-4 rounded-xl'}
                        label={invenTabel.product}
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange} />
                    <Input
                        type={'text'}
                        placeholder={''}
                        className={'border border-[1px] p-2 mt-4 rounded-xl'}
                        label={invenTabel.price}
                        name='price'
                        value={formData.price}
                        onChange={handleInputChange} />
                    <Input
                        type={'text'}
                        placeholder={''}
                        className={'border border-[1px] p-2 mt-4 rounded-xl'}
                        label={invenTabel.inventory}
                        name='count'
                        value={formData.count}
                        onChange={handleInputChange} />

                    <Button 
                    onClick={handleSave} 
                    type={'button'} 
                    className={'bg-[#414833] text-white rounded-full p-2 text-2xl font-bold cursor-pointer'} 
                    label={invenTabel.save} />
                </div>
            </div>
        </div>
    )
}
