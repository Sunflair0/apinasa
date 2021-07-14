export const CLEAR_TOURINFO = "Clear TourInfo";
export const SET_TOURINFO = "Set TourInfo";

export function clearTourInfo() {
  return { type: CLEAR_TOURINFO };
}

export function setTourInfo(tourinfo) {
  return { type: SET_TOURINFO, tourinfo };
}
