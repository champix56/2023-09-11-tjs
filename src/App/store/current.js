import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DummyMeme } from "../interfaces/common";
import { REST_ADR } from "../constantes/constantes";

const initialState = DummyMeme;

const current = createSlice({
  name: "current",
  initialState,
  reducers: {
    change(state, action) {
      Object.assign(state, action.payload);
    },
    clear(state) {
      delete state.id;
      Object.assign(state, DummyMeme);
    },
    copy(state) {
      delete state.id;
    },
  },
  extraReducers(builder) {
    builder.addCase("current/save/fulfilled", (s, a) => {});
  },
});
export const saveCurrent = createAsyncThunk("current/save", async (current) => {
  const p = await fetch(
    `${REST_ADR}/memes${undefined !== current.id ? "/" + current.id : ""}`,
    {
      method: undefined !== current.id ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(current),
    }
  );
  return await p.json();
});
export const { clear, change, copy } = current.actions;

export default current.reducer;
