import { SET_FORM, CLEAR_FORM } from "../actions";

const initialFormState = [];

export default function formReducer(state = initialFormState, action) {
  switch (action.type) {
    case SET_FORM:
      return [...action.form];
    case CLEAR_FORM:
      return [];
    default:
      return state;
  }
}
