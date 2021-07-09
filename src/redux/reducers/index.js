import { combineReducers } from "redux";
import clientReducer from "./clientReducer";

import podtReducer from "./podReducer";
import favoritesReducer from "./favoritesReducer";
import formReducer from "./formReducer";
import podReducer from "./podReducer";
import searchesReducer from "./searchesReducer";
import tourinfoReducer from "./tourinfoReducer";
import tourinsReducer from "./tourinsReducer";



const rootReducer = combineReducers({
  client: clientReducer,
  favorites: favoritesReducer,
  form: formReducer,
  pod: podReducer,
  search: searchesReducer,
  tourinfo: tourinfoReducer,
  tourins: tourinsReducer,


 
});

export default rootReducer;
