export const CLEAR_APOD = "Clear Apod";
export const SET_APOD = "Set Apod";
export const CLEAR_BYDATE = "Clear ByDate";
export const SET_BYDATE = "Set ByDate";

export const ADD_APOD ="ADD APOD";
export const DELETE_APOD ="DELETE APOD";

export function clearApod() {
  return { type: CLEAR_APOD };
}

export function setApod(apod) {
  return { type: SET_APOD, apod };
}

export function clearByDate() {
  return { type: CLEAR_BYDATE };
}

export function setByDate(bydate) {
  return { type: SET_BYDATE, bydate };
}

