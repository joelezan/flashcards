import { useState } from 'react';
import './App.css';
import Card from './components/card.jsx';
import Arrow from './assets/Arrow.png'

function App() {
  const statesAndCapitals = {
    Texas: 'Austin',
    Florida: 'Tallahassee',
    California: 'Sacramento',
    NewYork: 'Albany',
    Illinois: 'Springfield',
    Georgia: 'Atlanta',
    Ohio: 'Columbus',
    NorthCarolina: 'Raleigh',
    Michigan: 'Lansing',
    Pennsylvania: 'Harrisburg',
    Arizona: 'Phoenix',
    Virginia: 'Richmond'
  };

  const stateNames = Object.keys(statesAndCapitals);
  

  const randomIndex = Math.floor(Math.random() * stateNames.length);
  const randomState = stateNames[randomIndex]; 
  
  const [currentState, setCurrentState] = useState(randomState);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    const newRandomIndex = Math.floor(Math.random() * stateNames.length);
    setCurrentState(stateNames[newRandomIndex]);
    setIsFlipped(false); 
  };

  return (
    <div className='App'>
      <div className='textHeader'>
        <h1>Know the States, Know your Country!</h1>
        <h2>How well do you know your country? Let's see!</h2>
        <h5>Number of cards: {Object.keys(statesAndCapitals).length}</h5>
      </div>

      <div className='flashcards' onClick={handleFlip}>
        <Card 
          question="What is the capital of"
          stateName={currentState}
          isFlipped={isFlipped}
          answer={statesAndCapitals[currentState]}
        />
      </div>
      <button onClick={handleNext}>
        <img className='arrowImage' src={Arrow} alt="Next" />
      </button>
    </div>
  );
}

export default App;
