import React from 'react'
import { useStore } from './store'

export default function Button() {
  const addBears = useStore(state=> state.addBears);
  return (
    <button onClick={()=> addBears(5)} className="bg-slate-900 rounded p-3">Add 5 bears</button>
  )
}
