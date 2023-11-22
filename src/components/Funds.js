import React from 'react'
import { DateRangePicker } from 'rsuite'
import Table from './shared/Table'
import Modal from './shared/Modal'
import Headings from './shared/Headings'

export default function Funds() {
  return (
    <div className='container'>
      <Headings title={'Funds'} />
      <DateRangePicker className='date-range' />
      <Table />
      <Modal />
    </div>
  )
}
