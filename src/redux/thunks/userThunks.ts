import axios from "axios";
import { UserToLogin, UserToRegister } from "../../types/types";
import { AppDispatch } from "../store/store";

export const registerThunk =
  (userData: UserToRegister) => async (dispatch: AppDispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}user/register`;

    const { data } = await axios.post<UserToRegister>(url, userData);
    if (data) {
      const newUser: UserToLogin = {
        username: data.username,
        password: userData.password,
      };
      dispatch(loginThunk(newUser));
    }

    dispatch(data);
  };
