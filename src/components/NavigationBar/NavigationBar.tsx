import { useNavigate } from "react-router-dom";

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
