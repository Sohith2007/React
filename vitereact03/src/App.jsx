import { useState } from 'react'

function App() {

  let [color,setcolour] = useState("black")

  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor:'red'}} onClick={() => setcolour("red")}>RED</button>
          <button className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor:'green'}} onClick={() => setcolour("green")}>GREEN</button>
          <button className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor:'blue'}} onClick={() => setcolour("blue")}>BLUE</button>
          <button className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor:'yellow'}} onClick={() => setcolour("yellow")}>YELLOW</button>
          <button className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor:'orange'}} onClick={() => setcolour("orange")}>ORANGE</button>
          <button className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor:'purple'}} onClick={() => setcolour("purple")}>PURPLE</button>
          <button className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor:'gray'}} onClick={() => setcolour("gray")}>GRAY</button>
          <button className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor:'black'}} onClick={() => setcolour("black")}>BLACK</button>

        </div>
      </div>
    </div>
    </>
  )
}

export default App
