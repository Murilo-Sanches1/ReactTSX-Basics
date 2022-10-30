import React, { useEffect, useState } from "react";

import styles from "./MemoryGameHome.module.scss";

import cover from "./assets/coverUNSPLASH.jpg";
import images from "./constants/images";
import Card from "./components/Card";

type TCard = {
  src: string;
  id: number;
  matched: boolean;
};

function MemoryGameHome(): JSX.Element {
  const [cards, setCards] = useState<TCard[]>();
  const [turnCounter, setTurnCounter] = useState<number>(0);
  const [choiceOne, setChoiceOne] = useState<TCard | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<TCard | null>(null);
  const [disabled, setDisabled] = useState<boolean>(false);

  const mixCards = () => {
    const mixedCards = [...images, ...images].sort(() => Math.random() - 0.5);
    const table = mixedCards.map((card, index) => {
      return { ...card, id: index };
    });
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(table);
    setTurnCounter(0);
  };

  const handleChoice = (card: TCard) => {
    // Sem essa linha o jogador poderia clicar duas vezes rapidao e mostraria a resposta
    if (card.id === choiceOne?.id) return;
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    mixCards();
  }, []);

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards?.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            }
            return card;
          });
        });
        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
        }, 500);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurnCounter((prevCount) => prevCount + 1);
    setDisabled(false);
  };

  return (
    <div className={`${styles["container"]}`}>
      <div className={`${styles["MemoryGame"]}`}>
        <h2>Jogo da Memória</h2>
        <button className={`${styles["btn"]}`} onClick={mixCards}>
          Novo Jogo
        </button>
        <span
          style={{
            display: "block",
            fontSize: "2rem",
            color: "aliceblue",
            marginTop: ".5rem",
          }}
        >
          Tentativas:{" "}
          <span style={{ fontFamily: "Source Sans Pro, sans-serif" }}>
            {turnCounter}
          </span>
        </span>
        <div className={`${styles["table-grid"]}`}>
          {cards?.map((card) => (
            <Card
              card={card}
              cover={cover}
              key={card.id}
              onChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MemoryGameHome;
