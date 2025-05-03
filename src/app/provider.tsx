'use client';

import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AppProviders({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            {children}
            <ToastContainer rtl position="top-right" />
        </Provider>
    );
}
