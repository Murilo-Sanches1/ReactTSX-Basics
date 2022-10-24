import React from 'react';

import styles from '../ExpenseTrackerHome.module.scss';

interface Props {
  label: string;
  maxValue: number;
  value: number;
}

function ChartBar(props: Props): JSX.Element {
  let barFillHeight = '0%';
  if (props.maxValue > 0) {
    // Calcular a porcentagem relativa ao valor mais alto nos gastos - 10 / 100 = 0,1 * 100 = 10 + % = 10%
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <div className={styles.chartBar}>
      <div className={styles.chartBarInner}>
        <div
          className={styles.chartBarFill}
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className={styles.chartBarLabel}>{props.label}</div>
    </div>
  );
}

export default ChartBar;
