import React from 'react'

function Modal({ isCorrect, turn, solution }) {
  return (
    <div className='modal'>
      {isCorrect && (
        <div>
            <h1>You have won! :) </h1>
            <p className='solution'>{solution}</p>
            <p>It took you {turn} guesses to find the right word!</p>
        </div>
      )}
      {!isCorrect && (
        <div>
            <h1>You have lost! :( </h1>
            <p className='solution'>The right word was: {solution}</p>
            <p>Till the next game!</p>
        </div>
      )}
    </div>
  )
}

export default Modal
