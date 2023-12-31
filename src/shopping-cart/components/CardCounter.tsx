'use client'
import { useState } from 'react'

interface Props {
  value?:number,
}
export const CardCounter = ({value: valueProps = 0}:Props) => {
    const [value, setvalue] = useState(valueProps)
    const [text, setText] = useState('Products in cart')
  const susOne= ()=>{
    if (value <= 0){
      setText('No more products in cart')
      return;
    }
    setvalue(value-1)
  }
  return (
    <>
      <span>{text}</span>
      <span className="text-9xl">{value}</span>
      <div className="flex">
        <button 
          onClick={()=>setvalue(value+1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">+1</button>
        <button 
          onClick={()=>setvalue(4)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">Reset</button>
        <button 
          onClick={susOne}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">-1</button>
      </div>
    </>
  )
}

