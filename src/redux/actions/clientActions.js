export const CLEAR_CLIENTTAG = "Clear Clientag";
export const SET_CLIENTTAG = "Set Clienttag";

export const setClienttag = (clienttag) => {
  return { type: SET_CLIENTTAG, clienttag };
};

export const clearClienttag = () => {
  return { type: CLEAR_CLIENTTAG };
};