import React from "react";
import { useRecoilState } from "recoil";
import BtnWrapper from "./Button";
import { bearState } from "./store";

export default function Recoil() {
  const [bears, setBears] = useRecoilState(bearState);

  return (
    <div className="flex-1 ">
      <h1 className="font-bold text-2xl">Recoil</h1>
      <p>Number of bears: {bears}</p>
      <BtnWrapper />
    </div>
  );
}
