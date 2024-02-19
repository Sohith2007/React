import { useState } from 'react'
import './App.css'

function App() {

  let [count,setcount] = useState(0)

  const addon = () => {
    if(count>=0) setcount(count+1)
    else setcount(0)
  }
  const remove = () => {
    if(count==0) setcount(0)
    else setcount(count-1)
  }
  return (
    <>
    <button onClick={addon} className='bg-red-400'>ADD</button>
    <h2 className='text-2xl my-6'>COUNTER:{count}</h2>
    <button onClick={remove} className='bg-red-400'>REMOVE</button>

    </>
  )
}

export default App
