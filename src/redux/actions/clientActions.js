export const CLEAR_CLIENT = "Clear Client";
export const SET_CLIENT = "Set client";

export function clearClient() {
  return { type: CLEAR_CLIENT };
}

export function setClient(client) {
  return { type: SET_CLIENT, client };
}