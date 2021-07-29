export const CLEAR_APOD = "Clear Apod";
export const SET_APOD = "Set Apod";
export const CLEAR_BYDATE = "Clear ByDate";
export const SET_BYDATE = "Set ByDate";
export const CLEAR_STARTDATE = "Clear StartDate";
export const SET_STARTDATE = "Set StartDate";
export const CLEAR_ENDDATE = "Clear EndDate";
export const SET_ENDDATE = "Set EndDate";
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

export function clearStartDate() {
  return { type: CLEAR_STARTDATE };
}

export function setStartDate(startdate) {
  return { type: SET_STARTDATE, startdate };
}

export function clearEndDate() {
  return { type: CLEAR_ENDDATE };
}

export function setEndDate(enddate) {
  return { type: SET_ENDDATE, enddate };
}