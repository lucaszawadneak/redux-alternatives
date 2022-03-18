import React from 'react'
import Button from './Button';
import { useStore } from './store';

export default function Zustand() {
  const bears = useStore(state=> state.bears);


  return (
    <div className='flex-1 '>
      <h1 className='font-bold text-2xl'>Zustand</h1>
      <p>Number of bears: {bears}</p>
      <Button/>
    </div>
  )
}
