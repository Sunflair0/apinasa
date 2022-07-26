import React, { useState } from "react";
import { connect } from "react-redux";


const ContactUs = ({
  clienttag
}) => {

  const handleSubmit = (e) => { e.preventDefault() }
  const [text, setText] = useState();

  return (
    <>
      <div className="content_flexbox">
        <h2>Contact Us</h2>
        <div className="contactBg2">
          <div className="glassForm">
            
            <div>
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

                <textarea className="textForm" type="text" required value={text} placeholder="TELL US in less than 500 characters" onChange={(e) => setText(e.target.value)}
                  maxLength="500"
                  rows={17}
                  cols={50} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function mapStateToProps(state) {
  return {

    client: state.client,

  };
}

const mapDispatchToProps = {

};


export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
