import React from 'react';

import styles from '../ExpenseTrackerHome.module.scss';

import ChartBar from './ChartBar';

interface Props {
  dataPoints: {
    value: number;
    maxValue?: number;
    label: string;
  }[];
}

function Chart(props: Props): JSX.Element {
  // DataPoints é um array de objetos. Extraimos todas as chaves (.value) de cada objeto e retornamos um array novo
  const dataPointValues: number[] = props.dataPoints.map(
    (dataPoint) => dataPoint.value
  );
  // Verificamos o maior número dentre o array para calcular a porcentagem relativa depois
  const totalMaximun: number = Math.max(...dataPointValues);

  return (
    <div className={styles.chart}>
      {props.dataPoints.map((el) => (
        <ChartBar
          value={el.value}
          maxValue={totalMaximun}
          label={el.label}
          key={el.label}
        />
      ))}
    </div>
  );
}

export default Chart;
