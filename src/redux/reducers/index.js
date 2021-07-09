import { combineReducers } from "redux";
import clientReducer from "./clientReducer";
import donkiReducer from "./donkiReducer";
import eonetReducer from "./eonetReducer";
import exoplanetReducer from "./exoplanetReducer";
import favoritesReducer from "./favoritesReducer";
import formReducer from "./formReducer";
import searchReducer from "./searchReducer";
import tourinfoReducer from "./tourinfoReducer";
import tourinsReducer from "./tourinsReducer";



const rootReducer = combineReducers({
  client: clientReducer,
  donki: donkiReducer,
  eonet: eonetReducer,
  exoplanet: exoplanetReducer,
  favorites: favoritesReducer,
  form: formReducer,
  search: searchReducer,
  tourinfo: tourinfoReducer,
  tourins: tourinsReducer,
 
    search: searchReducer,


 
});

export default rootReducer;
