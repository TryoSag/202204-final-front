import axios from "axios";
import { checkPrime } from "crypto";
import { getPetsActionCreator } from "../features/petsSlice";
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
    }
  };
