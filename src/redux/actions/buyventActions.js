export const CLEAR_BUYVENT = "Clear BuyVent"
export const SET_BUYVENT = "Set RemoveVent"

export function clearBuyVent(buyvent) {
  return { type: CLEAR_BUYVENT, buyvent };
}

export function setBuyVent(buyvent) {
  return { type: SET_BUYVENT, buyvent };
}
