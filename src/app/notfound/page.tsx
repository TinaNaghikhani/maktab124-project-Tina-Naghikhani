import AddModal from '@/components/modals/addModalProductP/addModal'
import DeletModal from '@/components/modals/deletModalProductPage/deletModal'
import NotFound from '@/components/notFound/notFoundComponent'
import React from 'react'

export default function page() {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <NotFound />
    </div>
  )
}
