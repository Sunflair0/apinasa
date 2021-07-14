import { combineReducers } from "redux";
import tourinfoReducer from "./tourinfoReducer"
import clientReducer from "./clientReducer";
import podReducer from "./podReducer";
import formReducer from "./formReducer";
import podReducer from "./podReducer";
import searchesReducer from "./searchesReducer";
import favoritesReducer from "./favoritesReducer";
import contactusReducer from "./contactusReducer";




const rootReducer = combineReducers({
  client: clientReducer,
  tourinfo: tourinfoReducer,
  form: formReducer,
  pod: podReducer,
  search: searchesReducer,
  favorites: favoritesReducer,
  contactus: contactusReducer,


 
});

export default rootReducer;
