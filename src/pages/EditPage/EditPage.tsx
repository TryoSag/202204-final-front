import CreateEditForm from "../../components/CreateEditForm/CreateEditForm";
import Header from "../../components/Header/Header";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

const EditPage = (): JSX.Element => {
  return (
    <>
      <Header pageName="Edit Pet" adminUser={false} />
      <NavigationBar />
      <CreateEditForm pageName="Edit Pet" />
    </>
  );
};

export default EditPage;
