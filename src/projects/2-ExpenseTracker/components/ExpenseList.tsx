import React from 'react';

import styles from '../ExpenseTrackerHome.module.scss';

import ExpenseItem from './ExpenseItem';

import IExpenseData from '../interfaces/IExpenseData';

interface Props {
  items: IExpenseData[];
}

function ExpenseList(props: Props): JSX.Element {
  if (props.items.length === 0) {
    return (
      <h2 className={styles.expensesListFallback}>
        Nenhum gasto foi achado para esse ano
      </h2>
    );
  }

  return (
    <ul className={styles.expensesList}>
      {props.items.map((el, index): JSX.Element => {
        // key={el.id}
        return <ExpenseItem data={el} key={index} />;
      })}
    </ul>
  );
}

export default ExpenseList;
