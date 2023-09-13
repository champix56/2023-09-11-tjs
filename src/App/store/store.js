import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ressourcesReducer, { addImage } from "./ressources.js";
import currentReducer from './current.js'
export const store = configureStore({
  reducer: combineReducers({ressources: ressourcesReducer,current:currentReducer}),
  devTools: true,
});
const daction = addImage({ id: -1, url: "hello" });
console.log(daction);

store.subscribe(() => {
  console.log("etat actuel", store.getState());
});


store.dispatch(daction);
store.dispatch({type:'ressources/addImage',payload:{hello:"de lu"}});
