import Header from "../../components/Header/Header";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

const DetailPage = (): JSX.Element => {
  return (
    <>
      <Header pageName="More About" adminUser={false} />
      <NavigationBar />
      <DetailPage />
    </>
  );
};

export default DetailPage;
