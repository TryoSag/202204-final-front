import CreateEditForm from "../../components/CreateEditForm/CreateEditForm";
import Header from "../../components/Header/Header";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

const CreatePage = (): JSX.Element => {
  return (
    <>
      <Header pageName="New Pet" adminUser={false} />
      <NavigationBar />
      <CreateEditForm pageName="New Pet" />
    </>
  );
};

export default CreatePage;
