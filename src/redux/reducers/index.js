import { combineReducers } from "redux";
import apodReducer from "./apodReducer";
import bigcubeReducer from "./bigcubeReducer";
import buyventReducer from "./buyventReduce";
import clientReducer from "./clientReducer";
import contactusReducer from "./contactusReducer";
import favoritesReducer from "./favoritesReducer";
import formReducer from "./formReducer";
import searchReducer from "./searchReducer";


const rootReducer = combineReducers({
  apod: apodReducer,
  bigcube: bigcubeReducer,
  buyvent: buyventReducer,
  client: clientReducer,
  contactus: contactusReducer,
  favorites: favoritesReducer,
  form: formReducer,
  search: searchReducer,

  
});

export default rootReducer;
