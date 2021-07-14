import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import updateAction from "./actions";

export default function App(props) {
  const { register, handleSubmit, setValue } = useForm();
  // Submit your data into Redux store
  const onSubmit = data => props.updateAction(data);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} defaultValue={props.firstName} />
      <input {...register("lastName")} defaultValue={props.lastName} />
      <input type="submit" />
    </form>
  );
}