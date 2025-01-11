import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //useState() is a hook.{coubter} is a value and {setCounter} is a function and we can also change its name. 
  let [counter, setCounter] = useState(0)
  // /let counter = 5;
  
  //For increment:
  const addValue = () =>{
    if(counter===20){
      // counter = counter;
      setCounter(counter);
    }
    else{
      counter = counter+1;
      setCounter(counter); //we can use as counter =counter+1 and use updated value.
    }
  }
  
  //For decrement:
  const removeValue = () => {
    if(counter===0){
      // conuter = counter;
      setCounter(counter);
    }
    else{
      counter =counter - 1;
      setCounter(counter);  
    }
  }

  return (
    <>
      <h1>Basic click counter using 'useState'</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add value: {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value: {counter}</button>
    </>
  )
}

export default App
