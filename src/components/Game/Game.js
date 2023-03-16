import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('');
	const [results, setResults] = React.useState(['PLKFD', 'PLFKD', 'FDSFS']);

	if (guess !== '') {
		const nextResults = results;
		nextResults.push(guess);
		setGuess('');
		setResults(nextResults);
	}

  return (
  	<>
  	<GuessResults results={results} setResults={setResults}/>
  	<GuessInput setGuess={setGuess}/>
  	</> 
  )
}

export default Game;
