import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import ListPets from "../../components/ListPets/ListPets";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { RootState } from "../../redux/store/store";

const ListPage = (): JSX.Element => {
  const { adminUser } = useSelector((state: RootState) => state.user);

  return (
    <>
      <Header pageName="List of Pet's" adminUser={adminUser} />
      <NavigationBar />
      <ListPets />
    </>
  );
};
export default ListPage;
