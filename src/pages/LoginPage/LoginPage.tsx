import Header from "../../components/Header/Header";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = (): JSX.Element => {
  return (
    <>
      <Header pageName={"Login"} adminUser={false} />
      <LoginForm />
    </>
  );
};

export default LoginPage;
