import React from "react";

export default function Persons(props) {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h1>Age: {props.Age}</h1>
      <h1>
        {props.name} {props.isMarried ? "is" : "Is NOT"} Married
      </h1>
      {props.friends.map((item) => {
        return <h1 key={item}>{item}</h1>;
      })}
    </div>
  );
}
