import React, { useState } from "react";

import styles from "../ToDoHome.module.scss";

interface Props {
  onAddGoal: (enteredText: string) => void;
}

function GoalForm(props: Props): JSX.Element {
  const [enteredValue, setEnteredValue] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);

  const goalInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(e.target.value);
  };

  const formSubmitHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles.formControl} ${!isValid ? styles.invalid : ""}`}
      >
        <label
        // style={{ color: !isValid ? 'red' : 'black' }}
        >
          Post Its
        </label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          // style={{ borderColor: !isValid ? 'red' : 'black', background: !isValid ? 'salmon' : 'tramsparent' }}
        />
      </div>
      <button type="submit" className={styles.button}>
        Adiconar
      </button>
    </form>
  );
}

export default GoalForm;
