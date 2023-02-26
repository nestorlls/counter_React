import fccLogo from './images/freecodecamp-logo.png';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='fcc-logo-container'>
        <img src={fccLogo} alt='logo fcc' className='fcc-logo' />
      </div>
    </div>
  );
}

export default App;
