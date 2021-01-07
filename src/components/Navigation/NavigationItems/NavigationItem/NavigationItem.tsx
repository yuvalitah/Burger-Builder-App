import React from "react";
import classes from "./NavigationItem.module.css";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const navigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <NavLink
      to={props.link}
      exact={props.exact}
      activeClassName={classes.active}
    >
      {props.children}
    </NavLink>
  </li>
);

navigationItem.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

export default navigationItem;
