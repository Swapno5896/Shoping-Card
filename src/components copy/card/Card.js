import React from "react";

const Card = (props) => {
  console.log("from card", props);
  return (
    <div style={{ display: "flex" }}>
      <h2> id is {props.pd}</h2>
      <button onClick={() => props.removeFromCard(props.pd)}>x</button>
    </div>
  );
};

export default Card;
