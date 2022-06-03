import { createSlice } from "@reduxjs/toolkit";
import { Pet } from "../../types/petsTypes";

const petsInitialState: Pet[] = [];

const petsSlice = createSlice({
  name: "pets",
  initialState: petsInitialState,
  reducers: {},
});

export default petsSlice.reducer;
