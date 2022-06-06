import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutActionCreator } from "../../redux/features/userSlice";
import { AppDispatch } from "../../redux/store/store";

const NavigationBar = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const list = () => {
    navigate("/list");
  };

  const logout = () => {
    dispatch(logoutActionCreator());
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      <div className="nav__container--list">
        <button onClick={list} />
        <span>List</span>
      </div>
      <div className="nav__container--logout">
        <button onClick={logout} />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default NavigationBar;
