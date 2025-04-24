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

    if (!isOpen) return null;

    return (
        <div className='fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm transition-opacity'>
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 w-[90%] max-w-md">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-red-600 transition-colors"
                    aria-label="Close modal"
                >
                    ✖
                </button>

                {/* Modal Title */}
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">{invenTabel.editProduct}</h2>

                <div className="flex flex-col gap-5">
                    <Input
                        type="text"
                        placeholder=""
                        className="border p-3 rounded-lg text-base"
                        label={invenTabel.product}
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    <Input
                        type="number"
                        placeholder=""
                        className="border p-3 rounded-lg text-base"
                        label={invenTabel.price}
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                    />
                    <Input
                        type="number"
                        placeholder=""
                        className="border p-3 rounded-lg text-base"
                        label={invenTabel.inventory}
                        name="count"
                        value={formData.count}
                        onChange={handleInputChange}
                    />

                    <Button
                        onClick={handleSave}
                        type="button"
                        className="bg-[#414833] hover:bg-[#2e3329] w-32 text-white rounded-full py-3 text-lg font-semibold transition-colors"
                        label={invenTabel.save}
                    />
                </div>
            </div>
        </div>
    );
}
