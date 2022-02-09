import { useState } from 'react';
import './App.css'
import ButtonDecrement from './ButtonDecrement';
import ButtonIncrement from './ButtonIncrement';
import logo from './logo.svg'

function App(){

  const [number, setNumber] = useState(0)

  const increment = ()=>{
    setNumber(number+1)
  }

  const decrement = ()=>{
    if (number>0){
      setNumber(number-1)
    }
  }

  return(
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo'/>
      </header>
      <h1>{number}</h1>
      <button className='btn' onClick={increment}>+</button>
      <button className='btn' onClick={decrement}>-</button>
      <br/><br/>
      <ButtonIncrement number={number} callIncrement={increment}/>
      <ButtonDecrement number={number} callDecrement={decrement}/>
    </div>
  );
  
}





export default App;