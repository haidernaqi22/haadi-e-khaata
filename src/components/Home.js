import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useState } from 'react';
import { ListItem } from '@mui/material';
import { set } from 'date-fns';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DateRangePicker } from '@mui/x-date-pickers/DateRangePicker';

export default function Home() {
  let [fundsValues, setFundsValue] = useState(60);
  let [expenseValue, setExpenseValue] = useState(40);

  const chartData = [
    {
      data: [
        { id: 0, value: 60, label: 'Funds' },
        { id: 1, value: 40, label: 'Expenses' },
      ],
    },
  ];

  function handleClick(e) {
    setFundsValue(70);
    setExpenseValue(30);

    // the values change in the console but the chart does not update
    console.log(' funds are ', fundsValues);
    console.log(' expenses are ', expenseValue);
  }

  return (
    <div className="homepage-container">
      <h1>Stats of Records</h1>
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateRangePicker']}>
                    <DateRangePicker localeText={{ start: 'Start Date', end: 'End Date' }} />
                </DemoContainer>
            </LocalizationProvider> */}

      <button onClick={handleClick} type="button" class="btn btn-primary">
        Change Data
      </button>

      <PieChart className="chart" series={chartData} width={600} height={400} />
    </div>
  );
}
