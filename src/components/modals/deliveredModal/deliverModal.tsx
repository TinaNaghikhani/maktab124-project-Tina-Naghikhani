import React, { useEffect } from 'react'
import { dashboardLocalization } from '@/localization/localization';
import Button from '@/components/base/button/page';
import { getOrder } from '@/services/getOrder/getOrder';
interface orderModalInterface {
    isOpen: boolean;
    onClose: () => void;
    order: any | null;

}
export default function DeliverModal({ onClose, isOpen, order }: orderModalInterface) {
    const { orderModals } = dashboardLocalization;
    if (!isOpen || !order) return null;
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const data = await getOrder();
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, []);
    return (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-xl shadow-xl text-black p-8 w-[400px] max-w-full text-center">
                <div className='w-full flex flex-col gap-4 items-start text-2xl mb-6'>
                    <button className="text-sm cursor-pointer text-start" onClick={onClose}>
                        X
                    </button>
                    <span><strong>{orderModals.cName}</strong> {order.user?.name} {order.user?.lName}</span>
                    <span className="block max-w-full break-words text-right">
                        <strong>{orderModals.adress}:</strong>
                        <p className="whitespace-break-spaces max-h-24 overflow-auto">
                            {order.user?.address}
                        </p>
                    </span>
                    <span><strong>{orderModals.phoneNumber}</strong>{order.user?.phone}</span>
                    <span><strong>{orderModals.OrderDAte}</strong>{new Date(order.createdAt).toLocaleDateString('fa-IR')}</span>
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
                        {order.products.map((item: any) => (
                            <tr key={item.id} className="border-t">
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{Number(item.price).toLocaleString()} تومن</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <Button onClick={onClose} type={'button'} className={'bg-green-500 px-2 py-1 text-white fon-bold text-3xl rounded-xl cursor-pointer hover:bg-green-800'} label={orderModals.deliveryBtn} />
            </div>
        </div>
    )
}
