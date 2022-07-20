import React, { useEffect, useState } from "react";
import axios from "axios";

export default function EffectHook() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].body);
        console.log("API was Called");
      });
  }, [count]);
  return (
    <div>
      <h1>Effect Hook</h1>
      <p>{data}</p>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me
      </button>
    </div>
  );
}
