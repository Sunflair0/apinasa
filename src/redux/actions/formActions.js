export const CLEAR_FORM = "Clear Form";
export const SET_FORM = "Set Form";

export function clearForm() {
  return { type: CLEAR_FORM };
}

export function setForm(form) {
  return { type: SET_FORM, form };
}
