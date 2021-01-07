import * as ActionTypes from "../../../store/actions/actionTypes";
import { Ingredients } from "../IBurgerBuilderState/IBurgerBuilderState";

export interface IAddIngredientAction {
    type: typeof ActionTypes.ADD_INGREDIENT,
    ingredientName: string,
};

export interface IRemoveIngredientAction {
    type: typeof ActionTypes.REMOVE_INGREDIENT,
    ingredientName: string,
};

export interface ISetIngredientsAction {
    type: typeof ActionTypes.SET_INGREDIENTS,
    ingredients: Ingredients,
};

export interface IFetchIngredientsFailedAction {
    type: typeof ActionTypes.FETCH_INGREDIENTS_FAILED,
};