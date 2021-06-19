import React from "react";

const ProductCard = (props) => {
  //   console.log(props);
  const { name, price, id } = props.pd;
  //   console.log("props from card ", name, price);
  return (
    <div style={{ border: "2px solid red", height: "160px" }}>
      <h4>{name}</h4>
      <p>{price}</p>
      <button onClick={() => props.addtoCard(id)}>add to card</button>
    </div>
  );
};

export default ProductCard;
