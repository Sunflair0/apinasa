import { connect } from "react-redux";

function IPN() {
	return (
		<>
			<div className="content_flexbox">
				<div>Intra-Planetary Net (chat)</div>
				<div className="ipn">	
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

export default connect(mapStateToProps, mapDispatchToProps)(IPN);