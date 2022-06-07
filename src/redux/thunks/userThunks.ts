import axios from "axios";
import jwtDecode from "jwt-decode";
import { User, UserToLogin, UserToRegister } from "../../types/userTypes";
import { loginActionCreator } from "../features/userSlice";
import { AppDispatch } from "../store/store";
import { getPetsThunk } from "./petsThunks";

export const registerThunk =
  (newUserData: UserToRegister) => async (dispatch: AppDispatch) => {
    const url = `${process.env.REACT_APP_API_URL}/user/register`;

    const { data } = await axios.post<UserToRegister>(url, {
      ...newUserData,
      adminUser: false,
    });

    if (data) {
      const userData: UserToLogin = {
        username: data.username,
        password: newUserData.password,
      };

      dispatch(loginThunk(userData));
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

      const { username, adminUser, eMail } = jwtDecode<User>(token);

      dispatch(loginActionCreator({ username, adminUser, eMail }));
    }
  };
