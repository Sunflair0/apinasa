export const CLEAR_SEARCHES = "Clear Searches";
export const SET_SEARCHES = "Set searches";

export function clearSearches() {
  return { type: CLEAR_SEARCHES };
}

export function setAstertrack(searches) {
  return { type: SET_SEARCHES, searches };
}
