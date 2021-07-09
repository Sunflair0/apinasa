import { SET_EXOPLANET, CLEAR_EXOPLANET } from "../actions";

const initialExoplanetState = [];

export default function exoplanetReducer(state = initialExoplanetState, action) {
  switch (action.type) {
    case SET_EXOPLANET:
      return [...action.exoplanet];
    case CLEAR_EXOPLANET:
      return [];
    default:
      return state;
  }
}
