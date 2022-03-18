import create from "zustand";
import { subscribeWithSelector } from 'zustand/middleware'

type State = {
  bears: number,
  addBears: ()=> void
}

export const useStore = create(subscribeWithSelector((set)=>({
  bears:0,
  bearsArray:[{id:1,count:0},{id:2,count:2}],
  addBears: (value:number) => {set((state:State)=>({bears:state.bears + value}))},
})))
