import React, { useRef } from "react";

export default function RefHook() {
  const inputRef = useRef(null);
  const onClick = () => {
    inputRef.current.focus();
  };
  const onClear = () => {
    inputRef.current.value = "";
  };

  return (
    <div>
      <h1>Ref Hook</h1>
      <input type="text" placeHolder="Ex.." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
      <button onClick={onClear}>Clear Name</button>
    </div>
  );
}
