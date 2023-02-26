import fccLogo from './images/freecodecamp-logo.png';
import './App.css';
import Button from './components/button';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {
  const [numClick, setNumClick] = useState(0);
  const listenClick = () => {
    setNumClick(numClick + 1);
  };

  const resetCounter = () => {
    setNumClick((0));
  };

  return (
    <div className='App'>
      <div className='fcc-logo-container'>
        <img src={fccLogo} alt='logo fcc' className='fcc-logo' />
      </div>
      <div className='container'>
        <Counter numClick={numClick} />
        <Button text='click' isButtonClick={true} listenClick={listenClick} />
        <Button text='reset' isButtonClick={false} listenClick={resetCounter} />
      </div>
    </div>
  );
}

export default App;
