export const CLEAR_SATVIEW = "Clear Satview";
export const SET_SATVIEW = "Set satview";

export function clearSatview() {
  return { type: CLEAR_SATVIEW };
}

export function setSatview(satview) {
  return { type: SET_SATVIEW, satview };
}
