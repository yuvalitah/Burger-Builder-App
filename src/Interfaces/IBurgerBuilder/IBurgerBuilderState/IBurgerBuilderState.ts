export interface IBurgerBuilderState {
    ingredients: Ingredients | null,
    totalPrice: number,
    error: boolean,
    building: boolean,
};

export interface Ingredients {
    salad: number,
    cheese: number,
    meat: number,
    bacon: number,
};