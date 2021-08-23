import React from "react";
import { connect } from "react-redux";
import {  } from "../redux/actions";

let clienttag

function Splash() { 

  return (
<>
    <div className="content">
      <h2 className="">Welcome, {clienttag}</h2>
</div>
<div className="menu1">
<ol>
<li>HOME</li>
<li>HOME</li>
<li>HOME</li>
<li>HOME</li>
<li>HOME</li>
<li>HOME</li>
<li>HOME</li>
<li>HOME</li>
<li>HOME</li>
<li>HOME</li>
</ol>

</div>
</>
  )
}
function mapStateToProps(state) {
  return {
    clienttag: state.client.clienttag

  };
}

const mapDispatchToProps = {
 
};


export default connect(mapStateToProps, mapDispatchToProps)(Splash);