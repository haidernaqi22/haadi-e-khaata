import React from 'react'
import { DateRangePicker } from 'rsuite'
import Table from './shared/Table'
import Modal from './shared/Modal'
import Headings from './shared/Headings'

export default function Records() {
    return (
        <div className='container'>
            <Headings title={'Records'} />
            <DateRangePicker className='date-range' />
            <Table />
            <Modal />
        </div>
    )
}
