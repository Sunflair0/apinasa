import React from "react";
import { connect } from "react-redux";


const Form = ({ username }) => {

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

function mapStateToProps(state) {
	return {
		username: state.user.username
	};
}

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
