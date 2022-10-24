import React from 'react';

import styles from '../ToDoHome.module.scss';

import GoalItem from './GoalItem';

import IGoal from '../interface/IGoal';

interface Props {
  items: IGoal[];
  onDeleteItem: (goalId: string) => void;
}

function GoalList(props: Props): JSX.Element {
  return (
    <ul className={styles.goalList}>
      {props.items.map((goal) => (
        <GoalItem key={goal.id} id={goal.id} onDelete={props.onDeleteItem}>
          {goal.text}
        </GoalItem>
      ))}
    </ul>
  );
}

export default GoalList;
