import React from 'react';
import '../sytesheets/Counter.css';

function Counter({ numClick }) {
  return <div className='counter'>{numClick}</div>;
}

export default Counter;
