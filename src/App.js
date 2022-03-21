import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [ firstNumber, setFirstNumber ] = useState(null);

  function changeFirstNumberHandler (event) {
    setFirstNumber(event.target.value);
  }

  useEffect(
    ()=>{
      console.log("firstNumber state:", firstNumber);
    }
  )

  return (
    <>
      <h1>Calculadora</h1>
      <input type="text" value={firstNumber} onChange={changeFirstNumberHandler}/>
    </>
  );
}

export default App;
