import Header from "../../components/Header/Header";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import PetDetail from "../../components/PetDetail/PetDetail";

const DetailPage = (): JSX.Element => {
  return (
    <>
      <Header pageName="More About" adminUser={false} />
      <NavigationBar />
      <PetDetail />
    </>
  );
};

export default DetailPage;
