import React from 'react';

import styles from '../ExpenseTrackerHome.module.scss';

import Card from '../layout/Card';
import ExpenseDate from './ExpenseDate';

import ExpenseData from '../interfaces/IExpenseData';

// interface IExpenseDate {
//   id: string;
//   title: string;
//   amount: number;
//   date: Date;
// }
interface Props {
  // children?: React.ReactNode;
  children?: JSX.Element | JSX.Element[];
  data: ExpenseData;
}

// interface Props {
//   children?: React.ReactNode;
//   id: string;
//   title: string;
//   amount: number;
//   date: Date;
// }
// type Props = {
//   children?: React.ReactNode;
// }

// const ExpenseItem: React.FC<Props> = (props) => {
function ExpenseItem(props: Props): JSX.Element {
  // const [title, setTitle] = useState(props.data.title);
  // const clickHandler = () => {
  //   console.log('Botão clicado');
  //   setTitle('Título atualizado');
  // };

  return (
    <li>
      <Card className={styles.expenseItem}>
        <ExpenseDate date={props.data.date} />
        <div className={styles.expenseItemDescription}>
          <h2>{props.data.title}</h2>
          <div className={styles.expenseItemPrice}>R$ {props.data.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Mudar Título</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
