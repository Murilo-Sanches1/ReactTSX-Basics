import React, { useState } from 'react';

import styles from './ExpenseTrackerHome.module.scss';

import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';
// import ExpenseItem from './components/ExpenseItem';
import IExpenseData from './interfaces/IExpenseData';

const INITIAL_DATA = [
  {
    id: 'e1',
    title: 'Demonstração Abril',
    amount: 123,
    date: new Date(2022, 3, 12),
  },
  {
    id: 'e2',
    title: 'Demonstração Setembro',
    amount: 456,
    date: new Date(2022, 8, 12),
  },
  {
    id: 'e3',
    title: 'Demonstração Junho',
    amount: 233,
    date: new Date(2022, 5, 12),
  },
  {
    id: 'e4',
    title: 'Demonstração Janeiro',
    amount: 100,
    date: new Date(2022, 0, 12),
  },
  {
    id: 'e5',
    title: 'Demonstração Dezembro',
    amount: 147,
    date: new Date(2022, 11, 12),
  },
  {
    id: 'e6',
    title: 'Demonstração Novembro',
    amount: 25,
    date: new Date(2022, 10, 12),
  },
];

function ExpenseTrackerHome(): JSX.Element {
  const [expenses, setExpenses] = useState<IExpenseData[]>(INITIAL_DATA);

  const addExpenseHandler = (expense: IExpenseData) => {
    // console.table(expense);
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };

  return (
    <div className={`${styles['bk']}`}>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      {/* <ExpenseItem items={expansesData} /> */}
    </div>
  );
}

export default ExpenseTrackerHome;
