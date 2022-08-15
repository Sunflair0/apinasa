import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const About = ({ loggedInUser }) => {
  return (
    <>
      <div className="content_flexbox">
        <h1>Greetings, {loggedInUser}! What do you want to know?</h1>


        <div className="tab">
          <button>About</button>
          <NavLink to='addons'><button>Add Ons</button></NavLink>
          <NavLink to='game'><button>Game</button></NavLink>
          <NavLink to='thissite'><button>This Site</button></NavLink>
          <NavLink to='tours'><button>Tours</button></NavLink>
        </div>
        <div className="folder coffee_stain">
<div className=''>
          <p>We are so happy you have chosen to explore the solar system with us. Take a moment to look through all your options before making a final choice. Make sure you look through all the extras that are available to you to make your Venture both safe and enjoyable (and maybe even profitable!)</p>
          <p> If you know someone that is on a Venture, you can sign up for our IntraPlanetary Net to keep in touch however you like. With our special TeraQ technology the chat will be real time. It will be as if you are almost there in person (not actually a feature, but the possibility is there).</p>
          <p>Feel free to explore pictures of space, courtesy of NASA's Astronomy Picture of the Day (APOD), or access Mars with MERs. If you happen to be far from Earth, we have a NavLink to real-time pictures of the blue marble from above to assuage your homesickness. You can even keep your favorite pictures in a personal folder for future perusal.</p>
          <p>While you are on a Tour, think about turning it into a Venture by agreeing to send back space rocks from your destination. We will find the buyers, and it will discount the price considerably.</p>
          <p>There is also a discount for leaving a review of your experience, whether your journey is complete or not.</p>
          <p>If you have ideas on how to improve our service, a venture you want to see added or just give a thumbs up (or down, it's ok. We're not perfect) then please hit the Contact Us button and fill out the form.</p>
          <p>Now that you know what we are about, go forth into that good night and enjoy the wonders and possibilities that are in front of you.</p>
          <p>Also, you can always push the Home button to come back here and read through explanations if you forget (happens to the best of us).</p>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
