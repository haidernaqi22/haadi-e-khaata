import React from "react";
import { useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function Home() {
  const [fundValue, setFundValue] = useState(60);
  const [expenseValue, setExpenseValue] = useState(40);

  function handleFundValue() {
    if (fundValue === 100) return;

    setFundValue((e) => e + 10);
    setExpenseValue((e) => e - 10);
  }

  function handleExpenseValue() {
    if (expenseValue === 100) return;

    setExpenseValue((e) => e + 10);
    setFundValue((e) => e - 10);
  }

  const chartData = [
    {
      data: [
        { id: 0, value: fundValue, label: "Funds" },
        { id: 1, value: expenseValue, label: "Expenses" },
      ],
    },
  ];

  return (
    <div className="homepage-container">
      <h1>Stats of Records</h1>
      <PieChart
        className="chart mt-3"
        series={chartData}
        width={600}
        height={400}
      />
      <div className="d-flex gap-2 mt-3">
        <button onClick={handleFundValue} className="btn btn-primary">
          Increase Funds by 10
        </button>
        <button onClick={handleExpenseValue} className="btn btn-success">
          Increase Expenses by 10
        </button>
      </div>
    </div>
  );
}
