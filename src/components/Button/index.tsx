import React from "react";

export default function Button({
  onClick,
}: {
  onClick: () => void;
}): React.ReactElement {
  return (
    <button onClick={onClick} className="bg-slate-900 rounded p-3">
      Add 5 bears
    </button>
  );
}
