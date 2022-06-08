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
    deletePet: (pets, action: PayloadAction<string>): IPet[] =>
      pets.filter((pet: IPet) => pet.id !== action.payload),
    createPet: (pets, action: PayloadAction<IPet>): IPet[] => [
      ...pets,
      action.payload,
    ],
  },
});

export const {
  getPets: getPetsActionCreator,
  deletePet: deletePetActionCreator,
  createPet: createPetActionCreator,
} = petsSlice.actions;

export default petsSlice.reducer;
