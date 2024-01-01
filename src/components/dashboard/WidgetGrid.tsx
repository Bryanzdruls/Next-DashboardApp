'use client'
import React from 'react'
import { SimpleWidget } from '..'
import { useAppSelector } from '@/store/store'
import { IoCartOutline } from 'react-icons/io5'

export const WidgetGrid = () => {
    const count = useAppSelector(state => state.counter.count)
  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
        <SimpleWidget 
            key={'a'} 
            title={count.toString()} 
            label={`Counter`} 
            subtitle='Products in cart' 
            icon={<IoCartOutline size={50} className="text-blue-600"/>} 
            href={'/dashboard/counter'}/>
    </div>
  )
}

export default WidgetGrid
