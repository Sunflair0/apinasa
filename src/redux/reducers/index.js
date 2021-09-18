import { combineReducers } from "redux";
import apodReducer from "./apodReducer";
import bigcubeReducer from "./bigcubeReducer";
import buyventReducer from "./buyventReduce";
import clientReducer from "./clientReducer";
import contactusReducer from "./contactusReducer";
import albumReducer from "./albumReducer";
import formReducer from "./formReducer";



const rootReducer = combineReducers({
  apod: apodReducer,
  bigcube: bigcubeReducer,
  buyvent: buyventReducer,
  client: clientReducer,
  contactus: contactusReducer,
  album: albumReducer,
  form: formReducer,
 

  
});

export default rootReducer;
