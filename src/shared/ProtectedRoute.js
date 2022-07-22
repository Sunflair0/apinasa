import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ clienttag, isPrivate, children }) {
      // Is this a private route?
      const redirectTo = isPrivate ? "/loginpage" : "/home";
      // Is there an activeUser?
      // Do the two work in combination
      if ((clienttag && isPrivate) || (!clienttag && !isPrivate)) {
        // If so, render the component
        return <>{children}</>;
      } else {
        // If not, redirect them
        return <Navigate to={redirectTo} />;
      }
    }
    
    const mapStateToProps = (state) => {
      return {
        clienttag: state.clienttag,
      };
    };
    
    const mapDispatchToProps = {};    
    export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);