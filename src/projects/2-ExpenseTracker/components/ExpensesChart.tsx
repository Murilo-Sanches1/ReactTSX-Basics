import React from 'react';

import Chart from './Chart';

import IExpenseData from '../interfaces/IExpenseData';

interface Props {
  expenses: IExpenseData[];
}

function ExpensesChart(props: Props): JSX.Element {
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Fev', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Abr', value: 0 },
    { label: 'Mai', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Ago', value: 0 },
    { label: 'Set', value: 0 },
    { label: 'Out', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dez', value: 0 },
  ];

  // Para Objetos
  //   for (const expense in props.data) {
  //     const expenseMonth = expense.date;
  //   }
  // Para Arrays
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // Começa do 0 - Janeiro é 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
}

export default ExpensesChart;
