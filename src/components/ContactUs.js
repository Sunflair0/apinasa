import { useState } from "react";

function ContactUs() {

const [text, setText] = useState("What's on your mind?")

const handleSubmit = (e) => {e.preventDefault()}


return (
<>
<div className="form">SpaceTours</div>
<form onSubmit={handleSubmit}/>
<div className="contact"/>
<textarea type="text"required value={text} onChange ={ (e) => setText(e.target.value)}/>
    <input type="email" placeholder="Email" name="email" ref="register ({ required: true})}"></input>
    <select>
<option value="Newsletter">Newsletter</option>
<option value="Insurance Claim">Insurance Claim</option>
<option value="IntraPlanet Net">IntraPlanet Net</option>
<option value="Refund">Refund</option>
<option value="Submit Testimonial">Submit Testimonial</option>
<option value="Safety Course">Safety Course</option>
<option value="Other">Other</option>
</select>

<input type="text" placeholder="Tell Us" ref="register({ required: true, minLength: 3; maxLength: 15;})"></input>
 <p> Subject must be between 3 and 15 characters</p>

    <input type="submit"></input>
</>
)
}

export default ContactUs;
