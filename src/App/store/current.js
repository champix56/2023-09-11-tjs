import { createSlice } from '@reduxjs/toolkit'
import { DummyMeme } from '../interfaces/common';

const initialState = DummyMeme;

// const current = createSlice({
//   name: 'current',
//   initialState,
//   reducers: {
//     changeCurrent(state,action){

//     },
//     clearCurrent(state,action){

//     }
//   }
// });

// export const {clearCurrent,changeCurrent} = current.actions

// export default current.reducer
const currentReducer =(state=initialState,action)=>{
    switch(action.type){
        case 'current/change':return {...state,...action.payload};
        case 'current/clear':return {...DummyMeme};
        default : return state;
    }
}
export default currentReducer