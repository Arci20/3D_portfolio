import State from "./State";
import { useState } from "react";

const Blog_post = () => {
  const [post, setLoading, setError] = State(false);

  const [count, setCount] = useState(0);

  const { avatar_url, bio, following, followers, id } = post;
  return (
    <>
      <div key={id}>
        <img
          style={{
            width: "100px",
            borderRadius: "25px",
            position: "relative",
            left: "35%",
          }}
          src={avatar_url}
        />
        <button onClick={() => setCount(count + 1)}>click</button>
        <h1>{count}</h1>

        <h2>{count}</h2>
        <h2>{following}</h2>
        <h1>{bio}</h1>
        <p>{followers}</p>
      </div>
    </>
  );
};

export default Blog_post;
