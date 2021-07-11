import React, {useState} from "react";
import { useForm } from "react-hook-form";
export default function FormData(){ 

const {register, handleSubmit, errors} =useForm
const onSubmit =(data) => {}


function ContactUs() {
    return(

<form onSubmit={handleSubmit}>
<div className="contact">
    <p className="titleform">SPACETOURS</p>
    <p className="formbody">What's on your mind?</p>
    <p>{client}</p>
    <input type="email" placeholder="Email" name="email" ref="register ({ required: true})}"></input>
    <input type="text" placeholder="Subject" name="subject" ref="register({ required: true, minLength: 3; maxLength: 15;})}"></input>
{errors.subject && <p> Subject must be descriptive</p>}

<input type="text" placeholder="Tell Us"></input>
    <input type="submit"></input>

</div>
</form>
);
}