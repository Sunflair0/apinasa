import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ client, isPrivate, children }) {
      // Is this a private route?
      const redirectTo = isPrivate ? "/home" : "/mypage";
      // Is there an activeUser?
      // Do the two work in combination
      if ((client && isPrivate) || (!client && !isPrivate)) {
        // If so, render the component
        return <>{children}</>;
      } else {
        // If not, redirect them
        return <Navigate to={redirectTo} />;
      }
    };
    
    const mapStateToProps = (state) => {
      return {
        client: state.client,
      };
    };
    
    const mapDispatchToProps = {};    
    export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);