import HeaderStyled from "./HeaderStyled";

interface HeaderProps {
  pageName: string;
  adminUser: boolean;
}

const Header = ({ pageName, adminUser }: HeaderProps): JSX.Element => {
  return (
    <HeaderStyled>
      <div className="container--header-logo-title">
        <img src="./images/logo.svg" alt="Pet's House logo" />
      </div>
      <h1>{pageName}</h1>
      <div className="container--header-buttons">
        {adminUser && pageName === "Pet's" && <button>+New</button>}
        {adminUser && pageName === "More about" && <button>Edit</button>}
        {adminUser && pageName === "More about" && <button>Delete</button>}
      </div>
    </HeaderStyled>
  );
};

export default Header;
