import { SET_BIGCUBE, CLEAR_BIGCUBE } from "../actions";

const initialBigCubeState = [];

export default function setBigCube(state = initialBigCubeState, action) {
  switch (action.type) {
    case SET_BIGCUBE:
      return [...action.bigcube];
    case CLEAR_BIGCUBE:
      return [];
    default:
      return state;
  }
}