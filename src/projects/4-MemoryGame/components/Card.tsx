import React from "react";

import styles from "../MemoryGameHome.module.scss";

type Props = {
  card: { src: string; id: number };
  cover: string;
  onChoice(card: object): void;
  flipped: boolean;
  disabled: boolean;
};

function Card({
  card,
  cover,
  onChoice,
  flipped,
  disabled,
}: Props): JSX.Element {
  const handleClickReview = () => {
    if (!disabled) {
      onChoice(card);
    }
  };

  return (
    <div className={`${styles["card"]}`}>
      <div className={flipped ? `${styles["flipped"]}` : ""}>
        <img
          src={card.src}
          alt="Card de frente"
          className={`${styles["front"]}`}
        />
        <img
          src={cover}
          alt="Card de costas"
          className={`${styles["back"]}`}
          onClick={handleClickReview}
        />
      </div>
    </div>
  );
}

export default Card;
