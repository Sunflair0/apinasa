import { combineReducers } from "redux";
import apodReducer from "./apodReducer";
import bigcubeReducer from "./bigcubeReducer";
import buyventReducer from "./buyventReduce";
import userReducer from "./userReducer";
import contactusReducer from "./contactusReducer";
import nasaReducer from "./nasaReducer";
import formReducer from "./formReducer";



const rootReducer = combineReducers({
  apod: apodReducer,
  bigcube: bigcubeReducer,
  buyvent: buyventReducer,
  user: userReducer,
  contactus: contactusReducer,
  nasa: nasaReducer,
  form: formReducer,
 

  
});

export default rootReducer;
