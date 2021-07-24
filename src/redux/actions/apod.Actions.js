export const CLEAR_APOD = "Clear Apod";
export const SET_APOD = "Set Apod";

export function clearApod() {
  return { type: CLEAR_APOD };
}

export function setApod(apod) {
  return { type: SET_APOD, apod };
}
