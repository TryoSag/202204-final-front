import axios from "axios";
import jwtDecode from "jwt-decode";
import { UserData, UserToLogin, UserToRegister } from "../../types/types";
import { loginActionCreator } from "../features/userSlice";
import { AppDispatch } from "../store/store";

export const registerThunk =
  (userData: UserToRegister) => async (dispatch: AppDispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}/user/register`;

    const { data } = await axios.post<UserToRegister>(url, userData);
    if (data) {
      const newUser: UserToLogin = {
        username: data.username,
        password: userData.password,
      };
      dispatch(loginThunk(newUser));
    }
  };

export const loginThunk =
  (userData: UserToLogin) => async (dispatch: AppDispatch) => {
    const url = `${process.env.REACT_APP_API_URL}/user/login`;

    const {
      data: { token },
    } = await axios.post(url, userData);

    if (token) {
      localStorage.setItem("token", token);
      const { username, adminUser } = jwtDecode<UserData>(token);
      dispatch(loginActionCreator({ username, adminUser }));
    }
  };
