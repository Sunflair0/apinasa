export const CLEAR_CLIENT = "Clear Client";
export const SET_CLIENT = "Set Client";

export function clearClient() {
  return { type: CLEAR_CLIENT };
}

export function setClient(clienttag) {
  return { type: SET_CLIENT, clienttag };
}