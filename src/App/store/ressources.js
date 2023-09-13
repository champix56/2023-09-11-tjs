import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { REST_ADR } from "../constantes/constantes";

const initialState = {
  memes: [],
  images: [],
};

/*
function addImage(content){
    return {type:'ressources/addImage',payload:content}
}
function rxrdc(s=initialState,action){
    switch(action.type){
        case 'ressources/addImage':
            return {...state, images:[...state.images,action.payload]};
        default : return state; 
    }
}*/
const ressources = createSlice({
  name: "ressources",
  initialState,
  reducers: {
    addImage(state, action) {
      state.images.push(action.payload);
    },
    loadImagesFromArg(state, action) {
      state.images.splice(0);
      state.images.push(...action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(
      "ressources/fetchAllRessources/fulfilled",
      (state, action) => {
        state.images.splice(0);
        state.images.push(...action.payload.images);
        state.memes.splice(0);
        state.memes.push(...action.payload.memes);
      }
    );
  },
});

export const fetchAllRessources = createAsyncThunk(
  "ressources/fetchAllRessources",
  async () => {
    const a = await Promise.all([
      fetch(REST_ADR + "/images"),
      fetch(REST_ADR + "/memes"),
    ]);
    
    return { images: await a[0].json(), memes: await a[1].json() };
  }
);

export const { addImage, loadImagesFromArg } = ressources.actions;

export default ressources.reducer;
