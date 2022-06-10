import axios from "axios";
import { IPet, IPetData } from "../../types/petsTypes";
import {
  createPetActionCreator,
  deletePetActionCreator,
  editedPetActionCreator,
  getPetsActionCreator,
} from "../features/petsSlice";
import { AppDispatch } from "../store/store";

export const getPetsThunk =
  (token: string) => async (dispatch: AppDispatch) => {
    const url = `${process.env.REACT_APP_API_URL}/pets`;

    const { data: pets } = await axios.get(url, {
      headers: { authorization: `Bearer ${token}` },
    });

    if (pets) {
      dispatch(getPetsActionCreator(pets));
    }
  };

export const deletePetThunk =
  (token: string, idToDelete: string) => async (dispatch: AppDispatch) => {
    const url = `${process.env.REACT_APP_API_URL}/pets/:${idToDelete}`;

    const { status } = await axios.delete(url, {
      headers: { authorization: `Bearer ${token}` },
    });

    if (status === 200) {
      dispatch(deletePetActionCreator(idToDelete));
    }
  };

export const createPetThunk =
  (token: string, newPet: IPetData) => async (dispatch: AppDispatch) => {
    const url = `${process.env.REACT_APP_API_URL}/pets/create`;

    const { data: createdPet, status } = await axios.post(url, newPet, {
      headers: { authorization: `Bearer ${token}` },
    });

    if (status === 201) {
      dispatch(createPetActionCreator(createdPet));
    }
  };

export const editPetThunk =
  (token: string, modifiedPet: IPet) => async (dispatch: AppDispatch) => {
    const url = `${process.env.REACT_APP_API_URL}/pets/edit`;

    const { status } = await axios.post(url, modifiedPet, {
      headers: { authorization: `Bearer ${token}` },
    });

    if (status === 200) {
      dispatch(editedPetActionCreator(modifiedPet));
    }
  };
