export const CLEAR_LOGIN = "Clear Login";
export const SET_Login = "Set Login";

export function clearLogin() {
  return { type: CLEAR_LOGIN };
}

export function setLogin(login) {
  return { type: SET_Login, login };
}
