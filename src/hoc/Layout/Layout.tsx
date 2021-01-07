import React, { useState } from "react";
import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import { connect } from "react-redux";
import { RootState } from "../../Types/RootState/RootState";
import PropTypes from "prop-types";

const Layout = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState<boolean>(false);

  const sideDrawerClosedHandler = (): void => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = (): void => {
    setShowSideDrawer(!showSideDrawer);
  };

  return (
    <>
      <Toolbar
        isAuth={props.isAuthenticated}
        drawerToggleClicked={sideDrawerToggleHandler}
      />
      <SideDrawer
        isAuth={props.isAuthenticated}
        open={showSideDrawer}
        closed={sideDrawerClosedHandler}
      />
      <main className={classes.Content}>{props.children}</main>
    </>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

Layout.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Layout);
