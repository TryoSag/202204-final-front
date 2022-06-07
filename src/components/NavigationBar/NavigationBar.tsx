import { useNavigate } from "react-router-dom";
import NavigationBarStyled from "./NavigationBarStyled";

const NavigationBar = () => {
  const navigate = useNavigate();

  const list = () => {
    navigate("/list");
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <NavigationBarStyled>
      <div className="nav__container--list">
        <img src="./images/icon-home.svg" alt="home icon" onClick={list} />
        <span>List</span>
      </div>
      <div className="nav__container--logout">
        <img
          src="./images/icon-logout.svg"
          alt="logout icon"
          onClick={logout}
        />
        <span>Logout</span>
      </div>
    </NavigationBarStyled>
  );
};

export default NavigationBar;
