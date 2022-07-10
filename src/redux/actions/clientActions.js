export const CLEAR_CLIENT = "Clear Client";
export const SET_CLIENT = "Set Client";

export const setClient = (client) => {
  return { type: SET_CLIENT, client };
};

export const clearClient = () => {
  return { type: CLEAR_CLIENT };
};