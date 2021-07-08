export const CLEAR_FORM = "Clear Form";
export const SET_FORM = "Set form";

export function clearForm() {
  return { type: CLEAR_FORM, form };
}

export function setForm(form) {
  return { type: SET_FORM, form };
}
