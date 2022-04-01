import React from "react";
import { useRecoilState } from "recoil";
import Button from "../Button";
import { bearState } from "./store";

export default function BtnWrapper(): React.ReactElement {
  const [bears, setBears] = useRecoilState(bearState);
  const handleAddBears = () => setBears(bears + 5);

  return <Button onClick={handleAddBears}></Button>;
}
