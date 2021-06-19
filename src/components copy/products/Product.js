import React from "react";
import { connect } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import {
  addToCart,
  removeFromCart,
} from "../../redux/ActionCreator/avtionCreator.tsx";
import Card from "../card/Card";
const mapStateToProps = (state) => {
  return {
    products: state.products,
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  addtoCard: addToCart,
  removeFromCard: removeFromCart,
};

const Product = (props) => {
  console.log("from product", props);

  return (
    <div>
      <h3>in cart we have {props.cart.length}</h3>
      {props.cart?.map((pd) => (
        <Card pd={pd} removeFromCard={props.removeFromCard}></Card>
      ))}
      <hr />
      <p>products</p>
      {props.products.map((pd) => (
        <ProductCard
          key={pd.id}
          addtoCard={props.addtoCard}
          pd={pd}
        ></ProductCard>
      ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
