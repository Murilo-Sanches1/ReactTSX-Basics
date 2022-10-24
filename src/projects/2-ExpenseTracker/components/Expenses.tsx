import React, { useState } from 'react';

import styles from '../ExpenseTrackerHome.module.scss';

import ExpanseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import Card from '../layout/Card';

import IExpenseData from '../interfaces/IExpenseData';
import ExpensesChart from './ExpensesChart';

interface Props {
  items: IExpenseData[];
}

function Expenses(props: Props): JSX.Element {
  const [year, setYear] = useState<number>(2022);
  const filterChangeHandler = (selectedYear: number) => {
    setYear(selectedYear);
  };

  const filteredArray = props.items.filter((el) => {
    // Retorna um array e não modifica as informações originais
    return el.date.getFullYear().toString() === String(year);
  });

  return (
    <div>
      <Card className={styles.expensees}>
        <ExpanseFilter
          onChangeFilter={filterChangeHandler}
          defaultYear={year}
        />
        <ExpensesChart expenses={filteredArray} />
        <ExpenseList items={filteredArray} />
      </Card>
    </div>
  );
}
export default Expenses;
