import axios from "axios";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { User, UserToLogin, UserToRegister } from "../../types/userTypes";
import { loginActionCreator } from "../features/userSlice";
import { AppDispatch } from "../store/store";

export const registerThunk =
  (newUserData: UserToRegister) => async (dispatch: AppDispatch) => {
    const url = `${process.env.REACT_APP_API_URL}/user/register`;
    const idLoading = toast.loading("Loading...", { isLoading: true });

    try {
      const { status, data } = await axios.post<UserToRegister>(url, {
        ...newUserData,
        adminUser: false,
      });

      toast.dismiss(idLoading);

      if (status === 201) {
        const userData: UserToLogin = {
          username: data.username,
          password: newUserData.password,
        };
        toast.success(`${data.username} registered`);

        dispatch(loginThunk(userData));
      }
    } catch {
      toast.dismiss(idLoading);

      toast.error("Error on register");
    }
  };

export const loginThunk =
  (userData: UserToLogin) => async (dispatch: AppDispatch) => {
    const url = `${process.env.REACT_APP_API_URL}/user/login`;
    const idLoading = toast.loading("Loading...", { isLoading: true });

    try {
      const {
        status,
        data: { token },
      } = await axios.post(url, userData);

      toast.dismiss(idLoading);

      if (status === 200) {
        localStorage.setItem("token", token);

        const { username, adminUser, eMail } = jwtDecode<User>(token);

        toast.success(` Welcome ${username}`);

        dispatch(loginActionCreator({ username, adminUser, eMail }));
      }
    } catch {
      toast.dismiss(idLoading);

      toast.error("Error on login");
    }
  };
