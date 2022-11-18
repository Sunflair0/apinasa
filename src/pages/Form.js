import React from "react";
import { connect } from "react-redux";


const Form = ({ loggedInUser }) => {

	const handleSubmit = (e) => { e.preventDefault() }

	return (
		<>
			<div className="content_flexbox">
				<div className="glassForm">
					Order Form
					<form onSubmit={handleSubmit}>
					</form>
				</div>
			</div>
		</>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
	};
};

const mapStateToProps = (state) => ({
	loggedInUser: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);