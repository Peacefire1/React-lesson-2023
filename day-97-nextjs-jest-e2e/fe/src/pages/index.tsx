import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [result, setResult] = useState(0)

   function Add (){
    return(

      setResult(num1 + num2)
    )
   }
   function Subtract (){
    return setResult(num1 - num2)
    
   }
   function Multiply (){
    return setResult(num1 * num2)

   }
   function Divide (){
    return setResult(num1 / num2)

   }

  

  return (
    <div className='container' >
      <div data-testid="result"  >
        {result}
      </div>
      <input  type="text" value={String(num1)} onChange={(e)=>{setNum1(Number(e.target.value))}} data-testid="num1"/>
      <br />
      <br />
      <input type="text" value={String(num2)} onChange={(e)=>{setNum2(Number(e.target.value))}} data-testid="num2"/>
      <br />
      <button  onClick={Add} data-testid="Add">ADD</button>
      <br />
      <button  onClick={Subtract} data-testid="Subtract">Subtract</button>
      <br />
      <button  onClick={Multiply} data-testid="Multiply">Multiply</button>
      <br />
      <button  onClick={Divide} data-testid="Divide">Divide</button>
      <br />

    </div>
  )
}
