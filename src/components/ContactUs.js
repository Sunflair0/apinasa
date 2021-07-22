import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import updateAction from "./actions";


const { register, handleSubmit, errors } = useForm();
const onSubmit = (data) => {}


function ContactUs() {
    return(

<form onSubmit={handleSubmit(onSubmit)}>
<div className="contact">
    <p className="titleform">SPACETOURS</p>
    <p className="formbody">What's on your mind?</p>
    <p>{client}</p>
    <input type="email" placeholder="Email" name="email" ref="register ({ required: true})}"></input>
    <select {...register ("Subject Topic")}>
<option value="Newsletter">Newsletter</option>
<option value="Insurance Claim">Insurance Claim</option>
<option value="IntraPlanet Net">IntraPlanet Net</option>
<option value="Refund">Refund</option>
<option value="Submit Testimonial">Submit Testimonial</option>
<option value="Rewards Program">Rewards Program</option>
<option value="Other">Other</option>

</select>

<input type="text" placeholder="Tell Us" ref="register({ required: true, minLength: 3; maxLength: 15;})}"></input>
{errors.subject && <p> Subject must be between 3 and 15 characters</p>}

    <input type="submit"></input>

</div>
</form>
);
}

export default ContactUs
