import React, { useState } from "react";

export default function StateLearn() {
  // useState // useEffect
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(0);
  const addItem = () => {
    item = setItem(item + 1);
  };
  const deleteItem = () => {
    item = setItem(item - 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me
      </button>
      <p>--------------------------------------------------------</p>
      <h1> NO OF ITEMS = {item} </h1>
      <button onClick={addItem}>ADD ITEM + </button>
      <button onClick={deleteItem}>DELETE ITEM - </button>
    </div>
  );
}
