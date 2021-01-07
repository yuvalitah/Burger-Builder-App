import React from "react";
import Button from "../../UI/Button/Button";
import PropTypes from "prop-types";

const OrderSummary = (props) => {
  const ingredientSummary: JSX.Element[] = Object.keys(props.ingredients).map(
    (ingredient) => {
      return (
        <li key={ingredient}>
          <span style={{ textTransform: "capitalize" }}>{ingredient}</span>:{" "}
          {props.ingredients[ingredient]}
        </li>
      );
    }
  );

  return (
    <>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </>
  );
};

OrderSummary.propTypes = {
  ingredients: PropTypes.exact({
    salad: PropTypes.number.isRequired,
    bacon: PropTypes.number.isRequired,
    cheese: PropTypes.number.isRequired,
    meat: PropTypes.number.isRequired,
  }),
  price: PropTypes.number.isRequired,
  purchaseCancelled: PropTypes.func.isRequired,
  purchaseContinued: PropTypes.func.isRequired,
};

export default OrderSummary;
