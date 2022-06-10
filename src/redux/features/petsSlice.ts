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
    editPet: (pets, action: PayloadAction<IPet>): IPet[] =>
      pets.map((pet) => (pet.id !== action.payload.id ? pet : action.payload)),
  },
});

export const {
  getPets: getPetsActionCreator,
  deletePet: deletePetActionCreator,
  createPet: createPetActionCreator,
  editPet: editPetActionCreator,
} = petsSlice.actions;

export default petsSlice.reducer;
