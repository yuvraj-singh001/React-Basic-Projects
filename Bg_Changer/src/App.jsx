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

            <button onClick={()=>{setColor("red")}} className='outline-none px-4 rounded-full text-white shadow-lg font-bold' style={{backgroundColor: "red"}}>Red</button>

            <button onClick={()=>{setColor("green")}} className='outline-none px-4 rounded-full text-white shadow-lg font-bold' style={{backgroundColor: "green"}}>Green</button>

            <button onClick={()=>{setColor("blue")}} className='outline-none px-4 rounded-full text-white shadow-lg font-bold' style={{backgroundColor: "blue"}}>Blue</button>

            <button onClick={()=>{setColor("purple")}} className='outline-none px-4 rounded-full text-white shadow-lg font-bold' style={{backgroundColor: "purple"}}>Purple</button>

            <button onClick={()=>{setColor("yellow")}} className='outline-none px-4 rounded-full text-black shadow-lg font-bold' style={{backgroundColor: "yellow"}}>Yellow</button>

            <button onClick={()=>{setColor("pink")}} className='outline-none px-4 rounded-full text-black shadow-lg font-bold' style={{backgroundColor: "pink"}}>Pink</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
