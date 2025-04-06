import { ButtonInterface } from '@/interfaces/interface'
import React from 'react'

export default function Button({ onClick, type, className, label, disable }: ButtonInterface) {
  return (
    <div>
          <button type={type} className={className} onClick={onClick} disabled={disable}>{label}</button>
    </div>
  )
}
