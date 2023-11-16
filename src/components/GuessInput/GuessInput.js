import React, {useState} from 'react';

function GuessInput({AddGuess}) {
  const [guess,setGuess] = useState("");
  const FormHandeller = (e) =>{
    e.preventDefault();
    if(guess.length !== 5){
      window.alert("Please enter the exactly 5 carcther");
      return;
    }
    console.log(guess);
    AddGuess({id : Math.random(), guess});
    setGuess("")
  }
  return (
  <form className="guess-input-wrapper" onSubmit={FormHandeller}>
    <label htmlFor="guess-input">Enter guess:</label>
    <input required maxLength={5} minLength={5} id="guess-input" type="text" value={guess} onChange={(e) => setGuess(e.target.value.toUpperCase())}/>
  </form>
  );
}

export default GuessInput;
