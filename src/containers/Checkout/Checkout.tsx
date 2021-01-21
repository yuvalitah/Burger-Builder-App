import React from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Route, Redirect } from "react-router-dom";
import ContactData from "./ContactData/ContactData";
import { connect } from "react-redux";
import { RootState } from "../../Types/RootState/RootState";
import PropTypes from "prop-types";

const Checkout = (props) => {
  const checkoutCancelledHandler = (): void => {
    props.history.goBack();
  };

  const checkoutContinuedHandler = (): void => {
    props.history.replace("/Burger-Builder-App/checkout/contact-data");
  };

  let summary: JSX.Element = <Redirect to="/Burger-Builder-App" />;

  if (props.ings) {
    const purchasedRedirect: JSX.Element = props.purchased ? <Redirect to="/Burger-Builder-App" /> : null;
    summary = (
      <div>
        {purchasedRedirect}
        <CheckoutSummary
          ingredients={props.ings}
          checkoutCancelled={checkoutCancelledHandler}
          checkoutContinued={checkoutContinuedHandler}
        />
        <Route
          path={props.match.path + "/contact-data"}
          component={ContactData}
        />
      </div>
    );
  }
  return summary;
};

const mapStateToProps = (state: RootState) => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased,
  };
};

Checkout.propTypes = {
  ings: PropTypes.exact({
      salad: PropTypes.number,
      bacon: PropTypes.number,
      cheese: PropTypes.number,
      meat: PropTypes.number,
    }),
  purchased: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Checkout);
