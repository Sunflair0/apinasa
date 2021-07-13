import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ client, path, reqUser, component }) {
  if ((client && reqUser) || (!client && !reqUser)) {
    return <Route path={path} component={component} />;
  } else {
    return <Redirect to={reqUser ? "/login" : "/search"} />;
  }
}
function mapStateToProps(state) {
  return {
    clienttag: state.client.clienttag,
  };
}

export default connect(mapStateToProps, {})(ProtectedRoute);
