import { combineReducers } from "redux";
import bydateReducer from "./bydateReducer";
import clientReducer from "./clientReducer";
import contactusReducer from "./contactusReducer";
import enddateReducer from "./enddateReducer";
import favoritesReducer from "./favoritesReducer";
import formReducer from "./formReducer";
<<<<<<< HEAD
=======
import apodReducer from "./apodReducer";
>>>>>>> master
import searchesReducer from "./searchesReducer";
import startdateReducer from "./startdateReducer";
import tourinfoReducer from "./tourinfoReducer"

const rootReducer = combineReducers({
  bydate: bydateReducer,
  client: clientReducer,
  contactus: contactusReducer,
  enddate: enddateReducer,
  favorites: favoritesReducer,
  form: formReducer,
<<<<<<< HEAD
=======
  apod: apodReducer,
>>>>>>> master
  search: searchesReducer,
  startdate: startdateReducer,
  tourinfo: tourinfoReducer,
  
});

export default rootReducer;
