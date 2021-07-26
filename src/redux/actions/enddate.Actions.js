export const CLEAR_ENDDATE = "Clear EndDate";
export const SET_ENDDATE = "Set EndDate";

export function clearEndDate() {
  return { type: CLEAR_ENDDATE };
}

export function setEndDate(enddate) {
  return { type: SET_ENDDATE, enddate };
}
