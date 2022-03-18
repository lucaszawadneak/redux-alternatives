import React from 'react'
import Recoil from './components/Recoil'
import Zustand from './components/Zustand'

export default function App() {
  return (
    <div className='flex justify-evenly h-screen w-full bg-slate-600 p-5 text-white'>
      <Zustand/>
      <Recoil/>
    </div>
  )
}
