export const CLEAR_BYDATE = "Clear ByDate";
export const SET_BYDATE = "Set ByDate";

export function clearByDate() {
  return { type: CLEAR_BYDATE };
}

export function setByDate(bydate) {
  return { type: SET_BYDATE, bydate };
}
