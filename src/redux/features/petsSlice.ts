import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pet } from "../../types/petsTypes";

const petsInitialState: Pet[] = [];

const petsSlice = createSlice({
  name: "pets",
  initialState: petsInitialState,
  reducers: {
    getPets: (pets, action: PayloadAction<Pet[]>): Pet[] => [...action.payload],
  },
});

export const { getPets: getPetsActionCreator } = petsSlice.actions;

export default petsSlice.reducer;
