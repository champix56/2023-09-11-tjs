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
});

export const fetchAllRessources=createAsyncThunk('ressources/fetchAllRessources',async ()=>{
    const pimages=await fetch(REST_ADR+'/images');
    const images=await pimages.json();
    return images;
})

export const { addImage, loadImagesFromArg } = ressources.actions;

export default ressources.reducer;
