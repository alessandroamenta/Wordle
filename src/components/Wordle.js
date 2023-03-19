import React, { useEffect } from "react";
import { useState } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";
import Modal from "./Modal";

export default function Wordle({ solution }) {
  const { currentGuess, handleKeypress, guesses, isCorrect, turn, usedKeys} = useWordle(solution);
  const [showModal, setShowModal] = useState(false)

  //handleKeypress is gonna get fired every time the user types a letter
  useEffect(() => {
    window.addEventListener("keypress", handleKeypress);
    if(isCorrect) {
        console.log('you win - you guessed the right word dude!')
        setTimeout(() => setShowModal(true), 1500)
        window.removeEventListener("keypress", handleKeypress)
    }
    if(turn > 5) {
        console.log('you lose bruh - you ran out of guesses!')
        setTimeout(() => setShowModal(true), 1500)
        window.removeEventListener("keypress", handleKeypress)
    }
    return () => window.removeEventListener("keypress", handleKeypress);
  }, [handleKeypress, isCorrect, turn]);

  

  return (
    <div>
      <div>Current guess: {currentGuess}</div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
      <Keypad usedKeys={usedKeys}/>
      {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution}/>}
    </div>
  );
}
