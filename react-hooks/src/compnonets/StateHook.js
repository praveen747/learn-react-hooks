import React, { useState, useEffect } from "react";

export default function StateHook() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <h1>State Hook</h1>
      <p>clicked {count} + many times</p>
      <button
        style={{
          width: "55px",
          height: "25px",
          backgroundColor: "green",
          marign: "2em",
        }}
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
      <button
        style={{
          width: "55px",
          height: "25px",
          backgroundColor: "red",
          marginInline: "20px",
        }}
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      <p>{document.title}</p>
    </div>
  );
}
