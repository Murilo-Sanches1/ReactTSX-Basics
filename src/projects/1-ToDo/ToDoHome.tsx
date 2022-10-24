import React, { useState } from 'react';

import styles from './ToDoHome.module.scss';

import GoalList from './components/GoalList';
import GoalForm from './components/GoalForm';

import IGoal from './interface/IGoal';

function ToDoHome(): JSX.Element {
  const [goals, setGoals] = useState<IGoal[]>([
    { text: 'Apenas um ToDo simples', id: Date.now().toString() },
    {
      text: 'Porém tem bastante coisa acontecendo por trás :)',
      id: Date.now().toString() + '0',
    },
    { text: 'Clique nos cards para excluí-los', id: Date.now() + '1' },
  ]);
  const addGoalHandler = (enteredText: string) => {
    setGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Date.now().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId: string) => {
    setGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>Sem notas. Talvez adicionar uma?</p>
  );

  if (goals.length > 0) {
    content = <GoalList items={goals} onDeleteItem={deleteItemHandler} />;
  }

  return (
    <div>
      <section id={styles.goalForm}>
        <GoalForm onAddGoal={addGoalHandler} />
      </section>
      <section id={styles.goals}>{content}</section>
    </div>
  );
}

export default ToDoHome;
