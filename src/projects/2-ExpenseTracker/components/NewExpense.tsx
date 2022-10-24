import React, { useState } from 'react';

import styles from '../ExpenseTrackerHome.module.scss';

import ExpenseForm from './ExpenseForm';

import IExpenseData from '../interfaces/IExpenseData';

interface Props {
  onAddExpense: (expense: IExpenseData) => void;
}

function NewExpense(props: Props): JSX.Element {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData: IExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      // id: Math.random().toString(),
      id: new Date(Date.now()).toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  return (
    <div className={styles.newExpense}>
      {!isEditing && (
        <button onClick={startEditingHandler}>Adicionar novo gasto</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onStopEditing={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
