import React from 'react';

import styles from '../ExpenseTrackerHome.module.scss';

interface Props {
  date: Date;
}

function ExpenseDate(props: Props): JSX.Element {
  const day = props.date.toLocaleString('pt-br', {
    day: '2-digit',
  });
  const month = props.date.toLocaleString('pt-br', {
    month: 'long',
  });
  const year = props.date.getFullYear();
  return (
    <div className={styles.expenseDate}>
      <div className={styles.expenseDateDay}>{day}</div>
      <div className={styles.expenseDateMonth}>{month}</div>
      <div className={styles.expenseDateYear}>{year}</div>
    </div>
  );
}

export default ExpenseDate;
