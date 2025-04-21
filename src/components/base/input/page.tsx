import { InputInterface } from '@/interfaces/interface'
import React from 'react'

export default function Input({ type, placeholder, className, onChange, value, disabled, id, name, error,label }: InputInterface) {
    return (
        <>
            <div className='flex flex-col w-full'>
                <label htmlFor="input" className='text-2xl'>{label}</label>
                <input type={type} placeholder={placeholder} className={className} onChange={onChange} value={value} disabled={disabled} id={id} name={name} />
                <span className='w-full text-xs text-red-500 min-h-4 line-clamp-2'>{error}</span>
            </div>
        </>
    )
}
