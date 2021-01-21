import React, { useEffect } from "react";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import { Route, Switch, Redirect } from "react-router-dom";
import Logout from "./containers/Auth/Logout/Logout";
import asyncComponent from "./hoc/asyncComponent/asyncComponent";
import { RootState } from "./Types/RootState/RootState";
import * as actions from "./store/actions/index";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const App = (props) => {
  useEffect(() => {
    const tryAutoSignup: Function = async (): Promise<void> => {
      await props.onTryAutoSignup();
    };

    tryAutoSignup();
  }, []);

  const asyncCheckout = asyncComponent(() =>
    import("./containers/Checkout/Checkout")
  );
  const asyncOrders = asyncComponent(() =>
    import("./containers/Orders/Orders")
  );
  const asyncAuth = asyncComponent(() => import("./containers/Auth/Auth"));

  let routes: JSX.Element = (
    <Switch>
      <Route path="/Burger-Builder-App/auth" component={asyncAuth} />
      <Route path="/Burger-Builder-App" exact component={BurgerBuilder} />
      <Redirect to="/Burger-Builder-App" />
    </Switch>
  );

  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/Burger-Builder-App/checkout" component={asyncCheckout} />
        <Route path="/Burger-Builder-App/orders" component={asyncOrders} />
        <Route path="/Burger-Builder-App/logout" component={Logout} />
        <Route path="/Burger-Builder-App/auth" component={asyncAuth} />
        <Route path="/Burger-Builder-App" exact component={BurgerBuilder} />
        <Redirect to="/Burger-Builder-App" />
      </Switch>
    );
  }

  return (
    <div>
      <Layout>{routes}</Layout>
    </div>
  );
};


const mapStateToProps = (state: RootState) => {
  return {
      isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  onTryAutoSignup: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
