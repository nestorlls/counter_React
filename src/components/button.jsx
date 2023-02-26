import React from 'react';
import '../sytesheets/Button.css'

function Button({ text, isButtonClick, listenClick }) {
  return (
    <button
      className={isButtonClick ? 'btn-click' : 'btn-reset'}
      onClick={listenClick}>
      {text}
    </button>
  );
}

export default Button;
