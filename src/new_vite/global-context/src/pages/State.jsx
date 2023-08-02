import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const State = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  if (setLoading) {
    <center>
      <h1>Loading...</h1>
    </center>;
  }

  if (setError) {
    <center>
      <h1>Something went wrong...</h1>
    </center>;
  }

  useEffect(() => {
    const Fetch = () => {
      axios
        .get("https://api.github.com/users/QuincyLarson")
        .then((response) => {
          console.log(response.data);
          setPost(response.data);
          setLoading(true);
        })
        .catch((error) => {
          console.log(error);
          setError(true);
        });
    };

    Fetch();
  }, []);

  return [post, setLoading, setError];
};
export default State;
