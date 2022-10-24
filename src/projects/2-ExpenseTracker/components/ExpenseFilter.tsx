import React from 'react';

import styles from '../ExpenseTrackerHome.module.scss';

interface Props {
  onChangeFilter: (selectedYear: number) => void;
  defaultYear: number;
}

function ExpensesFilter(props: Props): JSX.Element {
  const dropdownChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.onChangeFilter(Number(e.target.value));
  };

  return (
    <div className={styles.expensesFilter}>
      <div className={styles.expensesFilterControl}>
        <label>Filtrar por ano</label>
        <select onChange={dropdownChangeHandler} value={props.defaultYear}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;
