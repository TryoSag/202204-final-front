import { useNavigate } from "react-router-dom";
import HeaderStyled from "./HeaderStyled";

interface HeaderProps {
  pageName: string;
  adminUser: boolean;
}

const Header = ({ pageName, adminUser }: HeaderProps): JSX.Element => {
  const navigate = useNavigate();

  const create = () => {
    navigate("/create");
  };

  return (
    <HeaderStyled>
      <div className="container--header-logo-title">
        <img
          height={74}
          width={152}
          src="./images/logo.svg"
          alt="Pet's House logo"
        />
      </div>
      <h1>{pageName}</h1>
      <div className="container--header-buttons">
        {adminUser && pageName === "Pet's" && (
          <button onClick={create}>+New</button>
        )}
      </div>
    </HeaderStyled>
  );
};

export default Header;
