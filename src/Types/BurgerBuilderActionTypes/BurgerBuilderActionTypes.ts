import { IAddIngredientAction, IRemoveIngredientAction, ISetIngredientsAction, IFetchIngredientsFailedAction } from "../../Interfaces/IBurgerBuilder/IBurgerBuilderActions/IBurgerBuilderAcrions";

export type BurgerBuilderActionTypes = IAddIngredientAction | IRemoveIngredientAction | ISetIngredientsAction |
    IFetchIngredientsFailedAction;