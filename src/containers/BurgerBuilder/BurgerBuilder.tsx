import React, { useState, useEffect } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import axios from "../../axios-orders";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import { RootState } from "../../Types/RootState/RootState";
import { Ingredients } from "../../Interfaces/IBurgerBuilder/IBurgerBuilderState/IBurgerBuilderState";
import PropTypes from "prop-types";

export const BurgerBuilder = (props) => {
  const [purchasing, setPurchasing] = useState<boolean>(false);

  useEffect(() => {
    const initIngredients: Function = async (): Promise<void> => {
      await props.onInitIngredients();
    };

    initIngredients();
  }, []);

  const updatePurchaseState = (ingredients: Ingredients): boolean => {
    let sum: number = 0;
    for (let key in ingredients) {
      sum += ingredients[key];
    }
    return sum > 0;
  };

  const purchaseHandler = (): void => {
    if (props.isAuthenticated) {
      setPurchasing(true);
    } else {
      props.onSetAuthRedirectPath("/checkout");
      props.history.push("/Burger-Builder-App/auth");
    }
  };

  const purchaseCancelHandler = (): void => {
    setPurchasing(false);
  };

  const purchaseContinueHandler = (): void => {
    props.onInitPurchase();
    props.history.push("/Burger-Builder-App/checkout");
  };

  const disabledInfo = {
    ...props.ings,
  };

  for (const key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  let orderSummary: JSX.Element = <Spinner />;

  let burger: JSX.Element = props.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

  if (props.ings) {
    burger = (
      <>
        <Burger ingredients={props.ings} />
        <BuildControls
          ingredientAdded={props.onIngredientAdded}
          ingredientRemoved={props.onIngredientRemoved}
          disabled={disabledInfo}
          price={props.price}
          purchasable={updatePurchaseState(props.ings)}
          isAuth={props.isAuthenticated}
          ordered={purchaseHandler}
        />
      </>
    );

    orderSummary = (
      <OrderSummary
        ingredients={props.ings}
        price={props.price}
        purchaseCancelled={purchaseCancelHandler}
        purchaseContinued={purchaseContinueHandler}
      />
    );
  }

  return (
    <>
      <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        {orderSummary}
      </Modal>
      {burger}
    </>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error,
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (ingName: string) => dispatch(actions.addIngredient(ingName)),
    onIngredientRemoved: (ingName: string) =>
      dispatch(actions.removeIngredient(ingName)),
    onInitIngredients: () => dispatch(actions.initIngredients()),
    onInitPurchase: () => dispatch(actions.purchaseInit()),
    onSetAuthRedirectPath: (path: string) =>
      dispatch(actions.setAuthRedirectPath(path)),
  };
};

BurgerBuilder.propTypes = {
  ings: PropTypes.exact({
    salad: PropTypes.number.isRequired,
    bacon: PropTypes.number.isRequired,
    cheese: PropTypes.number.isRequired,
    meat: PropTypes.number.isRequired,
  }),
  price: PropTypes.number.isRequired,
  error: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  onIngredientAdded: PropTypes.func.isRequired,
  onIngredientRemoved: PropTypes.func.isRequired,
  onInitIngredients: PropTypes.func.isRequired,
  onInitPurchase: PropTypes.func.isRequired,
  onSetAuthRedirectPath: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
