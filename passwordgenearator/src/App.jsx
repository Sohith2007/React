import { useState,useCallback,useEffect,useRef} from 'react'

function App() {

  let [length,setlength] = useState(8)
  let [numberyes,setnumberyes] = useState(false)
  let [characteryes,setcharacteryes] = useState(false)
  let [password,setpassword] = useState(null)

  const passwordref = useRef(null)

  const copypasswordtoclipboard = useCallback(() => {
    passwordref.current.select()
    passwordref.current.setSelectionRange(0,999999)
    window.navigator.clipboard.writeText(password)
  },[password])


  const passwordgenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberyes) str +=  "0123456789"
    if(characteryes) str += "!@#$%^&*_-+={}[]~`"

    for(let i=1;i<= length;i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass+=str[char]
    }

    setpassword(pass)
  },[length,numberyes,characteryes,setpassword])

  useEffect(() =>{passwordgenerator()},[length,numberyes,characteryes,setpassword])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
    <h1 className='text-center text-white my-3'>Password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password} className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly ref={passwordref} />

        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copypasswordtoclipboard}>Copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={8} max={100} value={length} className='cursor-pointer' onChange={(e) =>{setlength(e.target.value)}}/>
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={numberyes} id='numberInput' onChange={() => {setnumberyes((prev) => !prev)}}/>
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={characteryes} id='characterInput' onChange={() => {setcharacteryes((prev) => !prev)}}/>
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
