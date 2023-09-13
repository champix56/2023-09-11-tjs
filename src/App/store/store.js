import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ressourcesReducer, { addImage, fetchAllRessources } from "./ressources.js";
import currentReducer from './current.js'
export const store = configureStore({
  reducer: combineReducers({ressources: ressourcesReducer,current:currentReducer}),
  devTools: true,
});
store.dispatch(fetchAllRessources());

//setInterval(store.dispatch(fetchAllRessources()),10000);
