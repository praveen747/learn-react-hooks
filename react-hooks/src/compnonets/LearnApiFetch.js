import React, { useEffect, useState } from "react";
import axios from "axios";
export default function LearnApiFetch() {
  const [comments, setComments] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        console.log("Api is fetching for comments");
        console.log(response);
        setComments(response.data[0].email);
      });
  });
  return (
    <div>
      <h1>Comments</h1>
      <p>{comments}</p>
    </div>
  );
}
