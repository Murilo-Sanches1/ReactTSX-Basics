import React from 'react';

import styles from "../ToDoHome.module.scss";

interface Props {
  children: string;
  id: string;
  onDelete: (goalId: string) => void;
}

function GoalItem(props: Props): JSX.Element {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className={styles.goalItem} onClick={deleteHandler}>
      {props.children}
    </li>
  );
}

export default GoalItem;
