export const CLEAR_ASTERTRACK = "Clear Astertrack";
export const SET_ASTERTRACK = "Set astertrack";

export function clearAstertrack() {
  return { type: CLEAR_ASTERTRACK };
}

export function setAstertrack(astertrack) {
  return { type: SET_ASTERTRACK, astertrack };
}
