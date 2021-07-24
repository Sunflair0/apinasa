import { SET_BYDATE, CLEAR_BYDATE} from "../actions";

const initialByDatState = [];

export default function ByDateReducer(state = initialByDatState, action) {
  switch (action.type) {
    case SET_BYDATE:
      return [...action.bydate];
    case CLEAR_BYDATE:
      return [];
    default:
      return state;
  }
}
