import Error404 from "../../components/Error404/Error404";
import Header from "../../components/Header/Header";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

const ErrorPage = (): JSX.Element => {
  return (
    <>
      <Header pageName="Error" adminUser={false} />
      <NavigationBar />
      <Error404 />
    </>
  );
};

export default ErrorPage;
