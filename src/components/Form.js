import React from "react";
import { connect } from "react-redux";


const Form = ({
	clienttag
}) => {

	const handleSubmit = (e) => { e.preventDefault() }

	return (
		<>
			<div className="flex3">
				<div className="glassForm">
					Order Form
					<form onSubmit={handleSubmit}>
					</form>
				</div>
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


export default connect(mapStateToProps, mapDispatchToProps)(Form);
