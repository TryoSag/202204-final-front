interface HeaderProps {
  pageName: string;
  adminUser: boolean;
}

const Header = ({ pageName, adminUser }: HeaderProps): JSX.Element => {
  return (
    <header>
      <div>
        <img src="" alt="Pet's House logo" />
      </div>
      <h1>{pageName}</h1>
      <div>
        {adminUser && pageName === "List of Pet's" && <button>Create</button>}
        {adminUser && pageName === "More about" && <button>Edit</button>}
        {adminUser && pageName === "More about" && <button>Delete</button>}
      </div>
    </header>
  );
};

export default Header;
