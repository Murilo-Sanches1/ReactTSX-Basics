import React, { useEffect, useState } from 'react';

import styles from './TicTacToeHome.module.scss';

type Details = {
  counterX: number;
  counterDraw: number;
  counterO: number;
};

function TicTacToeHome(): JSX.Element {
  const makeTable = (): string[] => Array(9).fill('');
  const definePlayer = (winner?: string | null): string => winner || 'X';
  const defaultDetails = (): Details => ({
    counterX: 0,
    counterDraw: 0,
    counterO: 0,
  });
  const [table, setTable] = useState<string[]>(makeTable);
  const [player, setPlayer] = useState<string>(definePlayer);
  const [winner, setWinner] = useState<string | null>(null);
  const [isOver, setIsOver] = useState<boolean>(false);
  const [details, setDetails] = useState<Details>(defaultDetails);

  useEffect(verifyWinner, [table]);

  const handleClickCell = (index: number) => {
    if (table[index] !== '') return;
    if (isOver) return;
    setPlayer(player === 'X' ? 'O' : 'X');
    setTable((prevTable: string[]) => {
      return prevTable.map((cell: string, i: number) => {
        return i === index ? player : cell;
      });
    });
  };

  function verifyWinner() {
    const possibilities: number[][] = [
      //  Linhas
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      // Colunas
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      // Diagonais
      [0, 4, 8],
      [2, 4, 6],
    ];
    possibilities.forEach((possibility: number[]) => {
      if (possibility.every((point: number) => table[point] === 'X')) {
        console.log('X ganhou');
        setWinner('X');
        setDetails((prevDetails) => {
          const newDetails = { ...prevDetails };
          newDetails.counterX += 1;
          return newDetails;
        });
        return setIsOver(true);
      }
      if (possibility.every((point: number) => table[point] === 'O')) {
        console.log('O ganhou');
        setWinner('O');
        setDetails((prevDetails) => {
          const newDetails = { ...prevDetails };
          newDetails.counterO += 1;
          return newDetails;
        });
        return setIsOver(true);
      }
    });
    if (table.every((cell) => cell !== '')) {
      setDetails((prevDetails) => {
        const newDetails = { ...prevDetails };
        newDetails.counterDraw += 1;
        return newDetails;
      });
      return setIsOver(true);
    }
  }

  return (
    <div className={`${styles['container']}`}>
      <div className={`${styles['container-flex']}`}>
        <div className={`${styles['game-status']}`}>
          {winner && (
            <h2>
              Ganhador:{' '}
              <span
                className={`${winner === 'X' ? styles['game-status-X'] : ''} ${
                  winner === 'O' ? styles['game-status-O'] : ''
                }`}
              >
                {winner}
              </span>
            </h2>
          )}
          {!winner && (
            <h2>
              Vez de:{' '}
              <span
                className={`${player === 'X' ? styles['game-status-X'] : ''} ${
                  player === 'O' ? styles['game-status-O'] : ''
                }`}
              >
                {player}
              </span>
            </h2>
          )}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              className={`${styles['btn-status']} ${styles['game-status-X-winner']}`}
            >
              Vitórias X ({details.counterX})
            </div>
            <div
              className={`${styles['btn-status']} ${styles['game-status-draw']}`}
            >
              Empates ({details.counterDraw})
            </div>
            <div
              className={`${styles['btn-status']} ${styles['game-status-O-winner']}`}
            >
              Vitórias O ({details.counterO})
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              className={`${styles['btn-status']} ${
                styles['game-status-restart']
              } ${winner === 'X' ? styles['x'] : ''} ${
                winner === 'O' ? styles['o'] : ''
              }`}
              onClick={() => {
                setIsOver(false);
                setPlayer(definePlayer(winner));
                setWinner(null);
                setTable(makeTable);
              }}
            >
              Recomeçar
            </button>
          </div>
        </div>
        <div
          className={`${styles['table-grid']} ${
            isOver ? styles['game-over'] : ''
          }`}
        >
          {table.map((cell, index) => (
            <div
              key={index}
              className={`${styles['cell']} ${
                cell === 'X' ? styles['X'] : ''
              } ${cell === 'O' ? styles['O'] : ''} ${
                isOver ? styles['X'] : ''
              }`}
              onClick={() => handleClickCell(index)}
            >
              <h1>{cell}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TicTacToeHome;
