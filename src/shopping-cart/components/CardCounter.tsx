'use client'
import { addOne, initCounterState, reset, substractOne } from '@/store/counter/CounterSlice';
import { useAppDispatch, useAppSelector } from '@/store/store'
import { useEffect } from 'react';


interface Props {
  value?:number,
}
interface CounterResponse{
  method: string,
  count: number,
}
const getApiRouter = async():Promise<CounterResponse> =>{
  const data:CounterResponse = await fetch('/api/counter').then( res => res.json());
  return data
}

export const CardCounter = ({value = 0}:Props) => {
    const {count,text} =  useAppSelector(state => state.counter);
    const dispatch = useAppDispatch();
    
 /*  useEffect(() => {
    dispatch( initCounterState(value))
  }, [dispatch,value]) */
  
  useEffect(() => {
    getApiRouter().then(data => dispatch( initCounterState(data.count)))
  }, [dispatch])

  return (
    <>
      <span>{text}</span>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button 
          onClick={() => dispatch(addOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">+1</button>
        <button 
          onClick={() => dispatch(reset(value))}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">Reset</button>
        <button 
          onClick={() => dispatch(substractOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">-1</button>
      </div>
    </>
  )
}

