import { createStore } from "redux";
import rootReducer from "./reducers";

const INITIAL_STATE = {
    client: null,
  };

export default createStore(rootReducer, INITIAL_STATE);
