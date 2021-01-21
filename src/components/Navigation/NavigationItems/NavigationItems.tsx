import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import PropTypes from "prop-types";

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/Burger-Builder-App" exact>
      Burger Builder
    </NavigationItem>
    {props.isAuthenticated ? (
      <NavigationItem link="/Burger-Builder-App/orders">Orders</NavigationItem>
    ) : null}
    {props.isAuthenticated ? (
      <NavigationItem link="/Burger-Builder-App/logout">Logout</NavigationItem>
    ) : (
      <NavigationItem link="/Burger-Builder-App/auth">Authenticate</NavigationItem>
    )}
  </ul>
);

navigationItems.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default navigationItems;
