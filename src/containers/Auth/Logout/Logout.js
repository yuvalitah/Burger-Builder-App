import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import { Redirect } from "react-router-dom";

const Logout = (props) => {
  useEffect(() => {
    const logout = async () => {
      await props.onLogout();
    };

    logout();
  }, []);

  return <Redirect to="/" />;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actions.authLogout()),
  };
};

export default connect(null, mapDispatchToProps)(Logout);
