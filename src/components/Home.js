import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import DateRangePicker from 'rsuite/DateRangePicker';
import 'rsuite/dist/rsuite.min.css';
import Headings from './shared/Headings';
import Modal from './shared/Modal';

export default function Home() {
    const chartData = [
        {
            data: [
                { id: 0, value: 60, label: 'Funds' },
                { id: 1, value: 50, label: 'Expenses' },
                { id: 1, value: 50, label: 'Expenses' },
            ],
        },
    ]
    return (
        <div className='homepage-container'>
            <Headings title={'Stats of Records'} />
            <DateRangePicker className='date-range' />
            <PieChart
                className="chart black-mode"
                series={chartData}
                width={600}
                height={400}
            />
            <div className='version-text'>Version 0.0.0</div>
            <Modal />
        </div>
    )
}
