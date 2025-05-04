import React from 'react'
import { dashboardLocalization } from '@/localization/localization';
import Button from '@/components/base/button/page';

export default function DeliverModal() {
    const { orderModals } = dashboardLocalization;
    
    return (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-xl shadow-xl text-black p-8 w-[400px] max-w-full text-center">
                <div className='w-full flex flex-col gap-4 items-start text-2xl mb-6'>
                    <button className="text-sm cursor-pointer text-start">
                        X
                    </button>
                    <span>{orderModals.cName}</span>
                    <span>{orderModals.adress}</span>
                    <span>{orderModals.phoneNumber}</span>
                    <span>{orderModals.OrderDAte}</span>
                </div>
                <table className='w-full text-center text-xl p-2 bg-[#A4AC86] rounded-xl text-white shadow-xl mb-6'>
                    <thead className='p-2 border'>
                        <tr>
                            <th>{orderModals.product}</th>
                            <th>{orderModals.count}</th>
                            <th>{orderModals.payedPrice}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>یاغی شن ها</td>
                            <td>2</td>
                            <td>600.000 تومن</td>
                        </tr>
                    </tbody>
                </table>

                <Button type={'button'} className={'bg-green-500 px-2 py-1 text-white fon-bold text-3xl rounded-xl cursor-pointer hover:bg-green-800'} label={orderModals.deliveryBtn}/>
            </div>
        </div>
    )
}
