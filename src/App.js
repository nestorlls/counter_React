import fccLogo from './images/freecodecamp-logo.png';
import './App.css';
import Button from './components/button';

function App() {
  const listenClick = () => {
    console.log('clickkkk');
  };

  const resetCounter = () => {
    console.log('resetttttttt');
  };
  return (
    <div className='App'>
      <div className='fcc-logo-container'>
        <img src={fccLogo} alt='logo fcc' className='fcc-logo' />
      </div>
      <div className='container'>
        <Button text='click' isButtonClick={true} listenClick={listenClick} />
        <Button text='reset' isButtonClick={false} listenClick={resetCounter} />
      </div>
    </div>
  );
}

export default App;
