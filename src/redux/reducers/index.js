import { combineReducers } from "redux";
import bydateReducer from "./bydateReducer";
import clientReducer from "./clientReducer";
import contactusReducer from "./contactusReducer";
import enddateReducer from "./enddateReducer";
import favoritesReducer from "./favoritesReducer";
import formReducer from "./formReducer";
import loginReducer from "./loginReducer";
import searchesReducer from "./searchesReducer";
import startdateReducer from "./startdateReducer";
import tourinfoReducer from "./tourinfoReducer";
import addFavoriteReducer from "./addFavoriteReducer";

const rootReducer = combineReducers({
addFavorite: addFavoriteReducer,
  bydate: bydateReducer,
  client: clientReducer,
  contactus: contactusReducer,
  enddate: enddateReducer,
  favorites: favoritesReducer,
  form: formReducer,
  login: loginReducer,  
  search: searchesReducer,
  startdate: startdateReducer,
  tourinfo: tourinfoReducer,

  
});

export default rootReducer;
