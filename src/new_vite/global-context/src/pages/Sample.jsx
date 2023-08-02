import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Sample = () => {
  const [post, setPost] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  if (setError) {
    <center>
      <h3>Something went wrong...</h3>
    </center>;
  }

  useEffect(() => {
    const Fetch = () => {
      axios
        .get("https://api.github.com/users/QuincyLarson")
        .then((response) => {
          console.log(response.data);
          setPost(response.data);
        })
        .catch((error) => {
          console.log("error");
          setError();
        });
    };

    Fetch();
  }, []);

  return [post, setError, setLoading];
};

export default Sample;
