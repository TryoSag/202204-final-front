import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = (): JSX.Element => {
  const navigate = useNavigate();

  const token: string | null = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      navigate("/list");
    }
  }, [navigate, token]);

  return (
    <>
      <Header pageName={"Login"} adminUser={false} />
      <LoginForm />
    </>
  );
};

export default LoginPage;
