import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import ListPets from "../../components/ListPets/ListPets";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { AppDispatch, RootState } from "../../redux/store/store";
import { getPetsThunk } from "../../redux/thunks/petsThunks";

const ListPage = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const token: string | null = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      dispatch(getPetsThunk(token));
    }
  }, [dispatch, token]);
  const { adminUser } = useSelector((state: RootState) => state.user);

  return (
    <>
      <Header pageName="Pet's" adminUser={adminUser} />
      <NavigationBar />
      <ListPets />
    </>
  );
};
export default ListPage;
