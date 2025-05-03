'use client';

import { Provider } from 'react-redux';
import { store, persistor } from '@/redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react';
export default function AppProviders({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            {children}
            <ToastContainer rtl position="top-right" />
            </PersistGate>
        </Provider>
    );
}
