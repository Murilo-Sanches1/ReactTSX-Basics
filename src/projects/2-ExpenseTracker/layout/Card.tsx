import React from 'react';

import styles from '../ExpenseTrackerHome.module.scss';

interface Props {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

function Card({ children, className }: Props): JSX.Element {
  // return <div className={`${styles.card} ${className}`}>{children}</div>;
  return <div className={`${className} ${styles.card}`}>{children}</div>;
}

export default Card;
