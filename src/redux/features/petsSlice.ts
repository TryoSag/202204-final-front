import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPet } from "../../types/petsTypes";

const petsInitialState: IPet[] = [];

const petsSlice = createSlice({
  name: "pets",
  initialState: petsInitialState,
  reducers: {
    getPets: (pets, action: PayloadAction<IPet[]>): IPet[] => [
      ...action.payload,
    ],
  },
});

export const { getPets: getPetsActionCreator } = petsSlice.actions;

export default petsSlice.reducer;
