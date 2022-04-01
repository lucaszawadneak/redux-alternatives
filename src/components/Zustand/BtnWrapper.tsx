import React from "react";
import { useStore } from "./store";
import Button from "../Button";

export default function BtnWrapper() {
  const addBears = useStore((state) => state.addBears);
  return <Button onClick={() => addBears(5)} />;
}
