import React from "react";

const FirstObject = { name: "Arc", age: 12, gender: "male" };

const SecondObject = { name: "Arca", age: 14, gender: "male" };

const ThirdObject = { name: "Arcq", age: 15, gender: "male" };

const Samples = (props) => {
  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1>{props.name}</h1>
      <p>{props.age}</p>
      <h3>{props.gender}</h3>
    </article>
  );
};

const Objects = () => {
  <>
    <Sample
      name={FirstObject.name}
      age={FirstObject.age}
      gender={FirstObject.gender}
    />
    <Sample
      name={SecondObject.name}
      age={SecondObject.age}
      gender={SecondObject.gender}
    />
    <Sample
      name={ThirdObject.name}
      age={ThirdObject.age}
      gender={ThirdObject.gender}
    />
  </>;
};

export default Objects;
