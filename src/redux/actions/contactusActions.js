export const CLEAR_CONTACTUS = "Clear ContactUs";
export const SET_CONTACTUS = "Set ContactUs";

export function clearContactUs() {
  return { type: CLEAR_CONTACTUS };
}

export function setContactUs(contactus) {
  return { type: SET_CONTACTUS, contactus };
}
