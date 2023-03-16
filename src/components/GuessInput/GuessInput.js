import React from "react";

function GuessInput({setGuess}) {
  let [input, setInput] = React.useState('');

  function onChange(event) {
  	setInput(event.target.value.toUpperCase());
  }

  function onSubmit(event) {
  	event.preventDefault();
  	// console.log({input});
  	setGuess(input);
  	setInput('');
  }

  return <form className="guess-input-wrapper" onSubmit={onSubmit}>
  	<label htmlFor="guess-input">Enter guess:</label>
	<input id="guess-input" type="text" minLength={5} maxLength={5} required pattern="[A-Za-z]{5}" title="5-letter word" value={input} onChange={onChange} />
</form>
}

export default GuessInput;
