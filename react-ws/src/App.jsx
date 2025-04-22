import { v4 as uuid } from 'uuid';
import './App.css'
import Dice from './Dice';
import DiceRoller from './DiceRoller';
import DiceHistory from './DiceHistory';
import { useState } from 'react';

// mégsem kell import { useEffect } from 'react';

function App() {
  
  const [roll, setRoll] = useState(0);
  const [oldRolls, setOldRolls] = useState([]);

  function handleRoll(number) {
    setRoll(number);
    setOldRolls((formarRolls) => [...formarRolls, number]);
    console.log(oldRolls);
  }


  return (
    <>
      <p>Hello from the App!</p>
      <DiceRoller onRoll={handleRoll}></DiceRoller>
      <Dice number={roll}></Dice>
      <DiceHistory rolls_input={oldRolls}></DiceHistory>
    </>
  );
}

export default App
