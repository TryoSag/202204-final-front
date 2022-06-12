import axios from "axios";
import jwtDecode from "jwt-decode";
import { User, UserToLogin, UserToRegister } from "../../types/userTypes";
import { loginActionCreator } from "../features/userSlice";
import { AppDispatch } from "../store/store";

export const registerThunk =
  (newUserData: UserToRegister) => async (dispatch: AppDispatch) => {
    const url = `${process.env.REACT_APP_API_URL}/user/register`;

    const { status, data } = await axios.post<UserToRegister>(url, {
      ...newUserData,
      adminUser: false,
    });

    if (status === 201) {
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
      status,
      data: { token },
    } = await axios.post(url, userData);

    if (status === 200) {
      localStorage.setItem("token", token);

      const { username, adminUser, eMail } = jwtDecode<User>(token);

      dispatch(loginActionCreator({ username, adminUser, eMail }));
    }
  };
