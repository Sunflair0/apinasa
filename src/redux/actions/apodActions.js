export const CLEAR_APOD = "Clear Apod";
export const SET_APOD = "Set Apod";
export const CLEAR_BYDATE="Clear Bydate"
export const SET_BYDATE="Set Bydate"

export const ADD_APOD ="ADD APOD";
export const DELETE_APOD ="DELETE APOD";

export function clearApod() {
  return { type: CLEAR_APOD };
}

export function clearByDate(apod) {
  return { type: CLEAR_BYDATE  };
}



