import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";
import { BurgerBuilderActionTypes } from "../../Types/BurgerBuilderActionTypes/BurgerBuilderActionTypes";
import { Ingredients } from "../../Interfaces/IBurgerBuilder/IBurgerBuilderState/IBurgerBuilderState";
import { ThunkActionType } from "../../Types/ThunkActionType/thunkActionType";

export const addIngredient = (name: string): BurgerBuilderActionTypes => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name,
  };
};

export const removeIngredient = (name: string): BurgerBuilderActionTypes => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name,
  };
};

export const setIngredients = (ingredients: Ingredients): BurgerBuilderActionTypes => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients,
  };
};

export const fetchIngredientsFailed = (): BurgerBuilderActionTypes => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED,
  };
};

export const initIngredients = (): ThunkActionType => {
  return (dispatch) => {
    axios
      .get("https://burger-application-93383.firebaseio.com/ingredients.json")
      .then((response) => dispatch(setIngredients(response.data)))
      .catch((error) => dispatch(fetchIngredientsFailed()));
  };
};
