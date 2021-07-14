export const CLEAR_CONTACTUS = "Clear Contactus";
export const SET_CONTACTUS = "Set Contactus";

export function clearContactus() {
  return { type: CLEAR_CONTACTUS };
}

export function setContactUs(contactus) {
  return { type: SET_CONTACTUS, contactus };
}
