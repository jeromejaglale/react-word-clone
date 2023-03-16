import React from "react";

function GuessResults({results, setResults}) {

  return (
		<div className="guess-results">
    	{results.map((guess, index) => (
				<p class="guess" key={index}>
      		<span class="cell incorrect">{guess[0]}</span>
          <span class="cell misplaced">{guess[1]}</span>
          <span class="cell misplaced">{guess[2]}</span>
          <span class="cell incorrect">{guess[3]}</span>
          <span class="cell incorrect">{guess[4]}</span>
        </p>
    	))}
    </div>  
  );
}

export default GuessResults;
