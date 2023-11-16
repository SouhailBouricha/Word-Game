import React from "react";

function Guess({ item }) {
  return (
    <p key={item.id} className="guess">
      {item.guess.split("").map((letter, id) => {
        return (
          <span className="cell" key={id}>
            {letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
