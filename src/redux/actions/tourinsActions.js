export const CLEAR_TOURINS = "Clear Tourins";
export const SET_TOURINS = "Set Tourins";

export function clearTourins() {
  return { type: CLEAR_TOURINS };
}

export function setTourins(tourins) {
  return { type: SET_TOURINS, tourins };
}
