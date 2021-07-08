export const CLEAR_TOURINFO = "Clear Tourinfo";
export const SET_TOURINFO = "Set tourinfo";

export function clearTourinfo() {
  return { type: CLEAR_TOURINFO };
}

export function setTourinfo(tourinfo) {
  return { type: SET_TOURINFO, tourinfo };
}
