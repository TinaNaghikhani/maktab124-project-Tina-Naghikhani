import React from 'react'
import Input from '../../base/input/page'
import Button from '../../base/button/page'
import { dashboardLocalization } from '@/localization/localization'

export default function AddModal() {
  const { addModal } = dashboardLocalization
  return (

    <div>
      <div>
        <Input type={'image'} placeholder={addModal.photo} className={''} label={addModal.photoLabel} />
        <Button type={'button'} className={''} label={addModal.uploadBtn} />
      </div>
      <Input type={'text'} placeholder={addModal.namePlaceHolder} className={''} label={addModal.nameLabel} />
      <select name="category" id="">
        <option value="">{addModal.category1}</option>
        <option value="">{addModal.category2}</option>
        <option value="">{addModal.category3}</option>
        <option value="">{addModal.category4}</option>
        <option value="">{addModal.category5}</option>
        <option value="">{addModal.category6}</option>
      </select>
      <textarea></textarea>
      <Button type={'button'} className={''} label={addModal.addBtn} />
    </div>
  )
}
