import AbButtons from "./AbButtons";
import { connect } from "react-redux";
import { Outlet } from "react-router-dom";

function About({ loggedInUser }) {
  return (
    <>
      <div className='content_flexbox1'>
        <h1>Greetings, {loggedInUser}! What do you want to know?</h1>
        <AbButtons />
<div className="folder">
        <Outlet />
      </div>
</div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const mapStateToProps = (state) => ({

  loggedInUser: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(About);