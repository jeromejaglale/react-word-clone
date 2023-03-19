import React from "react";
import { sample, range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({guess, answer}) {
  const guessStatuses = checkGuess(guess, answer);

  return <p className="guess">
          {range(5).map((num) => (
	          <span className={'cell' + ' ' + (guessStatuses != null ? guessStatuses[num].status : '')} key={num}>{guess ? guess[num] : undefined}</span>
          	))}
        </p>;
}

export default Guess;
