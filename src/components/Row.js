import React from "react";

function Row({ guess, currentGuess }) {
  //if guess is not empty
  if (guess) {
    return (
      <div className="row past">
        {guess.map((char, i) => (
          <div key={i} className={char.color}>
            {char.key}
          </div>
        ))}
      </div>
    );
  }

  if (currentGuess) {
    let characters = currentGuess.split('')

    return (
        <div className="row current">
        {characters.map((char, i) => (
          <div key={i} className="filled">{char}</div>
        ))}
        {[...Array(5 - characters.length)].map((_,i) => (
          <div key={i}></div>
        ))}
      </div>
    )
  }

  return (
    <div className="row">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Row;
