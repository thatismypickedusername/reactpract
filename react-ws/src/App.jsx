import { v4 as uuid } from 'uuid';
import './App.css'
import Dice from './Dice';
import DiceRoller from './DiceRoller';
import { useState } from 'react';

function App() {

  function handleRoll(number) {
    console.log(number)
    setRoll(number)
  }

  const [roll, setRoll] = useState(0)

  return (
    <>
      <p>Hello from the App!</p>
      <DiceRoller onroll={handleRoll}></DiceRoller>
      <Dice number={roll}></Dice>
    </>
  );
}

export default App
