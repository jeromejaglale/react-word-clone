import React from "react";

function GuessInput() {
  let [input, setInput] = React.useState('');

  function onChange(event) {
  	setInput(event.target.value.toUpperCase());
  }

  function onSubmit(event) {
  	event.preventDefault();
  	console.log(input);
  	setInput('');
  }

  return <form className="guess-input-wrapper" onSubmit={onSubmit}>
  	<label htmlFor="guess-input">Enter guess:</label>
	<input id="guess-input" type="text" pattern="[A-Za-z]{5}" value={input} onChange={onChange} />
</form>
}

export default GuessInput;
