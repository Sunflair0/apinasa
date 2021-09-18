import React, { useState } from "react";
import { connect } from "react-redux";


const ContactUs = ({
  clienttag
}) => {

  const handleSubmit = (e) => { e.preventDefault() }
  const [text, setText] = useState();

  return (
    <>
      <div className="">
        <div className="glassForm">
          <div>Contact Us
            <form onSubmit={handleSubmit}>

<input type="submit" ></input>
              <input className="textEmail" type="email" placeholder="Email" name="email" ></input>
              <select className="textDrop" name="selectList" id="selectList">
                <option value="Newsletter" label="Newsletter">Newsletter</option>
                <option value="Insurance Claim" label="Insurance Claim">Insurance Claim</option>
                <option value="IntraPlanet Net" label="IntraPlanet Net">IntraPlanet Net</option>
                <option value="Refund" label="Refund">Refund</option>
                <option value="Submit Testimonial" label="Submit Testimonial">Submit Testimonial</option>
                <option value="Safety Course" label="Safety Course">Safety Course</option>
                <option value="Other" label="Other">Other</option>
              </select>

              {/* <input type="text" placeholder="Tell Us" ref="register({ required: true, minLength: 3; maxLength: 15;})"></input>
 <p> Subject must be between 3 and 15 characters</p>  */}

              
              <textarea className="textForm" type="text" required value={text} placeholder="TELL US" onChange={(e) => setText(e.target.value)}
                rows={17}
                cols={50} />
            </form>
          </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
