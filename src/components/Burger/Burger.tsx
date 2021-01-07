import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import PropTypes from "prop-types";

const burger = (props) => {
  const transformedIngredients: JSX.Element[] = Object.keys(props.ingredients)
    .map((key) =>
      [...Array(props.ingredients[key])].map((_, i) => (
        <BurgerIngredient key={key + i} type={key} />
      ))
    )
    .reduce((prev, curr) => prev.concat(curr), []);

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients.length ? (
        transformedIngredients
      ) : (
        <p>Please start adding Ingredients!</p>
      )}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

burger.propTypes = {
  ingredients: PropTypes.exact({
    salad: PropTypes.number.isRequired,
    bacon: PropTypes.number.isRequired,
    cheese: PropTypes.number.isRequired,
    meat: PropTypes.number.isRequired,
  })
};

export default burger;
