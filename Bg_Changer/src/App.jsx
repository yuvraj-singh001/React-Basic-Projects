import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("grey");

  return (
    // onclick function always expect a function.

    <>
      <div className='w-full h-screen duration-500 ' style = {{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
          <div className='flex flex-wrap justify-evenly gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl w-1/2'>

            <button onClick={()=>{setColor("red")}} className='outline-none px-4 rounded-full text-white shadow-lg font-bold bg-red-600'>Red</button>

            <button onClick={()=>{setColor("green")}} className='outline-none px-4 rounded-full text-white shadow-lg font-bold bg-green-600'>Green</button>

            <button onClick={()=>{setColor("blue")}} className='outline-none px-4 rounded-full text-white shadow-lg font-bold bg-blue-500'>Blue</button>

            <button onClick={()=>{setColor("purple")}} className='outline-none px-4 rounded-full text-white shadow-lg font-bold bg-purple-500'>Purple</button>

            <button onClick={()=>{setColor("yellow")}} className='outline-none px-4 rounded-full text-black shadow-lg font-bold bg-yellow-400'>Yellow</button>

            <button onClick={()=>{setColor("pink")}} className='outline-none px-4 rounded-full text-black shadow-lg font-bold bg-pink-500'>Pink</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
