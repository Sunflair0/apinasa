export const CLEAR_STARTDATE = "Clear StartDate";
export const SET_STARTDATE = "Set StartDate";

export function clearStartDate() {
  return { type: CLEAR_STARTDATE };
}

export function setStartDate(startdate) {
  return { type: SET_STARTDATE, startdate };
}
