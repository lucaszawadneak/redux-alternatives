import React from "react";
import BtnWrapper from "./BtnWrapper";
import { useStore } from "./store";

export default function Zustand() {
  const bears = useStore((state) => state.bears);

  return (
    <div className="flex-1 ">
      <h1 className="font-bold text-2xl">Zustand</h1>
      <p>Number of bears: {bears}</p>
      <BtnWrapper />
    </div>
  );
}
