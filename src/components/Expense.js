import React from 'react'
import { DateRangePicker } from 'rsuite'
import Table from './shared/Table'
import Modal from './shared/Modal'
import Headings from './shared/Headings'

export default function Expense() {
  return (
    <div className='container'>
      <Headings title={'Expenses'}/>
      <DateRangePicker className='date-range' />
      <Table />
      <Modal />
    </div>
  )
}
