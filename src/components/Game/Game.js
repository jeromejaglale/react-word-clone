import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Banner({outcome, nbGuesses, answer}) {
	if(outcome === 'happy') {
		return (
	  	<div className='banner happy'>
			  <p>
			    <strong>Congratulations!</strong> Got it in
			    <strong> {nbGuesses} guesses</strong>.
			  </p>
			</div>
		)
	}
	else if (outcome === 'sad') {
		return (
			<div className="sad banner">
  			<p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
			</div>
		)
	}
}


function Game() {
  const [guess, setGuess] = React.useState('');
	const [results, setResults] = React.useState([]);
	let outcome = ''; 
	let nbGuesses = 0;
	let inputDisabled = false;

	if (guess !== '') {
		const nextResults = results;
		nextResults.push(guess);
		setGuess('');
		setResults(nextResults);
	}
	else {
		for (var i = 0; i < results.length; i++) {
			if(results[i] === answer) {
				outcome = 'happy';
				nbGuesses = i;
				break;
				inputDisabled = true;
			}
			else if (i === 5 && results[i] !== '') {
				outcome = 'sad';
				inputDisabled = true;
			}
		};
	}

  return (
  	<>
  	<GuessResults results={results} setResults={setResults} answer={answer}/>
  	<GuessInput setGuess={setGuess} inputDisabled={inputDisabled}/>
		<Banner outcome={outcome} nbGuesses={nbGuesses} answer={answer} />
  	</> 
  )
}

export default Game;
