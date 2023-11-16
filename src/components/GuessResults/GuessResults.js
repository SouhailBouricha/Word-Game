import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess/Guess";
function GuessResults({ previousGuesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((item) => {
        if (previousGuesses[item]) {
          return <Guess item={previousGuesses[item]} />;
        } else {
          return (
            <p className="guess" key={item}>
              <span className="cell"></span>
              <span className="cell"></span>
              <span className="cell"></span>
              <span className="cell"></span>
              <span className="cell"></span>
            </p>
          );
        }
      })}
    </div>
  );
}

export default GuessResults;
