import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DateRangePicker } from '@mui/x-date-pickers/DateRangePicker';

export default function Home() {
    const chartData = [
        {
            data: [
                { id: 0, value: 60, label: 'Funds' },
                { id: 1, value: 40, label: 'Expenses' },
            ],
        },
    ]
    return (
        <div className='homepage-container'>
            <h1>Stats of Records</h1>
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateRangePicker']}>
                    <DateRangePicker localeText={{ start: 'Start Date', end: 'End Date' }} />
                </DemoContainer>
            </LocalizationProvider> */}
            <PieChart
                className="chart"
                series={chartData}
                width={600}
                height={400}
            />
        </div>
    )
}
