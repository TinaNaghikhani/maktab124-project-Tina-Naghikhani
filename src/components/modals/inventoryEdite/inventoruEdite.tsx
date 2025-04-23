import React from 'react'
import Input from '../../base/input/page'
import Button from '../../base/button/page'
import { dashboardLocalization } from '@/localization/localization'
interface EditModalInterface {
    isOpen: boolean;
    onClose: () => void;

}
export default function InventoryEditeModal({ isOpen, onClose }: EditModalInterface) {
    const { addModal } = dashboardLocalization
    const { invenTabel } = dashboardLocalization
    if (!isOpen) {
        return null
    }
    return (
        <div className='fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-black/50 backdrop-blur-sm'>
            <div className="bg-white rounded-xl shadow-xl text-black p-8 w-[400px] max-w-full">
                <button className='corsur-pointer' onClick={onClose}>X</button>
                <div className='flex flex-col gap-4 text-2xl'>
                    <Input type={'text'} placeholder={''} className={'border border-[1px] p-2 mt-4 rounded-xl'} label={invenTabel.product} />
                    <Input type={'text'} placeholder={''} className={'border border-[1px] p-2 mt-4 rounded-xl'} label={invenTabel.price} />
                    <Input type={'text'} placeholder={''} className={'border border-[1px] p-2 mt-4 rounded-xl'} label={invenTabel.inventory} />

                    <Button type={'button'} className={'bg-[#414833] text-white rounded-full p-2 text-2xl font-bold cursor-pointer'} label={invenTabel.save} />
                </div>
            </div>
        </div>
    )
}
