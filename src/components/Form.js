import React from "react";
import { connect } from "react-redux";


const Form = ({
clienttag
}) => {



	return (
		<div className="glassForm">
			Order Form
		</div>
	)
}

function mapStateToProps(state) {
  return {
       clienttag: state.client.clienttag
  };
}

const mapDispatchToProps = {

};


export default connect(mapStateToProps, mapDispatchToProps)(Form);
