import React from "react";
import classes from "./Order.module.css";
import PropTypes from "prop-types";
import { IOrderElement } from "../../Interfaces/IFormElement/IFormElement";

const order = (props) => {
  const ingredients: IOrderElement[] = [];
  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  }

  const ingredientsOutput: JSX.Element[] = ingredients.map((ingredient) => (
    <span
      key={ingredient.name}
      style={{
        textTransform: "capitalize",
        display: "inline-block",
        margin: "0 8px",
        border: "1px solid #ccc",
        padding: "5px",
      }}
    >
      {ingredient.name} ({ingredient.amount})
    </span>
  ));

  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientsOutput}</p>
      <p>
        Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

order.propTypes = {
  ingredients: PropTypes.exact({
    salad: PropTypes.number,
    bacon: PropTypes.number,
    meat: PropTypes.number,
    cheese: PropTypes.number,
  }).isRequired,
  price: PropTypes.number.isRequired,
};

export default order;
