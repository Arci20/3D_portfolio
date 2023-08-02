import React from "react";

const FirstOb = {
  name: "cat",
  img: "https://api.github.com/users/QuincyLarson",
  id: 1,
};

const SecondOb = {
  name: "cat",
  img: "https://api.github.com/users/QuincyLarson",
  id: 2,
};

const ThirdOb = {
  name: "cat",
  img: "https://api.github.com/users/QuincyLarson",
  id: 3,
};

const Obj = (props) => {
  return (
    <article
      style={{
        display: "grid",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <img src={props.img} />
      <h3>{props.name}</h3>
      <p>{props.id}</p>
    </article>
  );
};

const Object = () => {
  return (
    <>
      <Obj img={FirstOb.img} name={FirstOb.name} id={FirstOb.id} />
      <Obj img={SecondOb.img} name={SecondOb.name} id={SecondOb.id} />
      <Obj img={ThirdOb.img} name={ThirdOb.name} id={ThirdOb.id} />
    </>
  );
};

export default Object;
