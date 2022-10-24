import React, { useState } from 'react';

import styles from '../ExpenseTrackerHome.module.scss';

import IExpenseData from '../interfaces/IExpenseData';

interface Props {
  onSaveExpenseData: (enteredExpenseData: IExpenseData) => void;
  onStopEditing: () => void;
}

function ExpenseForm(props: Props): JSX.Element {
  const [typedTitle, setTypedTittle] = useState<string>('');
  const [typedAmount, setTypedAmount] = useState<number>(0);
  const [typedDate, setTypedDate] = useState<string>('');
  const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTypedTittle(e.target.value);
    // Jeito para quando se depende da última snapshot do state
    // setTypedTittle((prevState) => {
    //   return { ...prevState, typedTitle: e.target.value };
    // });
  };
  const amountChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTypedAmount(Number(e.target.value));
  };
  const dateChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTypedDate(e.target.value);
  };
  const submitFormHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    if (typedTitle.trim().length === 0) {
      alert('Título deve ser preenchido');
    }
    e.preventDefault();
    const expenseData = {
      title: typedTitle,
      amount: typedAmount,
      date: new Date(typedDate),
    };
    setTypedTittle('');
    setTypedAmount(0);
    setTypedDate('');
    props.onSaveExpenseData(expenseData);
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className={styles.newExpenseControls}>
        <div className={styles.newExpenseControl}>
          <label htmlFor="">Título</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={typedTitle}
            placeholder="Com o que você gastou?"
          />
        </div>
        <div className={styles.newExpenseControl}>
          <label htmlFor="">Preço</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={typedAmount}
          />
        </div>
        <div className={styles.newExpenseControl}>
          <label htmlFor="">Data</label>
          <input
            type="date"
            // min="2019-01-01"
            // step="2023-12-31"
            onChange={dateChangeHandler}
            value={typedDate}
          />
        </div>
      </div>
      <div className={styles.newExpenseActions}>
        <button
          type="button"
          onClick={() => {
            props.onStopEditing();
          }}
        >
          Cancelar
        </button>
        <button type="submit">Cadastrar</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
