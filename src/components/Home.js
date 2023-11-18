import React from 'react'
import { useState } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DateRangePicker } from '@mui/x-date-pickers/DateRangePicker';

export default function Home() {
    const [fundsValue, setFundsValue] = useState(60);
    const [expensesValue, setExpensesValue] = useState(40);

    const chartData = [
        {
            data: [
                { id: 0, value: fundsValue, label: 'Funds' },
                { id: 1, value: expensesValue, label: 'Expenses' },
            ],
        },
    ];

    return (
        <div className='homepage-container'>
            <h1>Stats of Records</h1>
            <div>
                <label>Funds:</label>
                <input
                    type="number"
                    value={fundsValue}
                    onChange={(e) => setFundsValue(e.target.value)}
                />
            </div>
            <div>
                <label>Expenses:</label>
                <input
                    type="number"
                    value={expensesValue}
                    onChange={(e) => setExpensesValue(e.target.value)}
                />
            </div>
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
