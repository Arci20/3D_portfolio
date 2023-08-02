import React, { useState } from "react";
import Sample from "./Sample";

const Sample2 = () => {
  const [post, setLoading, setError] = Sample(false);
  const [count, setCount] = useState(0);

  const { avatar_url, followers, id, name } = post;
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={avatar_url} />
        <h3>{name}</h3>
        <p>{followers}</p>
        <p>{id}</p>
        <button onClick={() => setCount(count - 1)}>Minus</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <div>{count}</div>
      </div>
    </>
  );
};

export default Sample2;
