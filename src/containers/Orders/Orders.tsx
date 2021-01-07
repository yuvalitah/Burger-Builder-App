import React, { useEffect } from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import Spinner from "../../components/UI/Spinner/Spinner";
import { RootState } from "../../Types/RootState/RootState";
import PropTypes from "prop-types";

const Orders = (props) => {
  useEffect(() => {
    const fetchOrders: Function = async (): Promise<void> => {
      await props.onFetchOrders(props.token, props.userId);
    };

    fetchOrders();
  }, []);

  let orders: JSX.Element | JSX.Element[] = <Spinner />;
  if (!props.loading) {
    orders = props.orders.map((order) => (
      <Order
        key={order.id}
        ingredients={order.ingredients}
        price={order.price}
      />
    ));
  }
  return <div>{orders}</div>;
};

const mapStateToProps = (state: RootState) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: (token: string, userId: string) =>
      dispatch(actions.fetchOrders(token, userId)),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

Orders.ropTypes = {
  orders: PropTypes.arrayOf(PropTypes.exact({
    ingredients: PropTypes.exact({
      salad: PropTypes.number,
      bacon: PropTypes.number,
      cheese: PropTypes.number,
      meat: PropTypes.number,
    }).isRequired,
    price: PropTypes.number.isRequired,
    userId: PropTypes.string.isRequired,
    orderData: PropTypes.exact({
      country: PropTypes.string,
      email: PropTypes.string,
      name: PropTypes.string,
      street: PropTypes.string,
      zipCode: PropTypes.string,
      deliveryMethod: PropTypes.string,
    }).isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  lodaing: PropTypes.bool.isRequired,
  token: PropTypes.string,
  userId: PropTypes.string,
  onFetchOrders: PropTypes.func.isRequired,
};

export default connector(withErrorHandler(Orders, axios));
