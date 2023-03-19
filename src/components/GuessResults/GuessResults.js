import React from "react";
import Guess from '../Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({results, setResults}) {

  return (
		<div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((n) => (
        <Guess guess={results?.[n]} key={n} />
      ))}
    </div>  
  );
}

export default GuessResults;
