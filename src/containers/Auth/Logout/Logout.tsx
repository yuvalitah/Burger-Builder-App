import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const Logout = (props) => {
  useEffect(() => {
    const logout: Function = async (): Promise<void> => {
      await props.onLogout();
    };

    logout();
  }, []);

  return <Redirect to="/Burger-Builder-App" />;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actions.authLogout()),
  };
};

Logout.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Logout);
