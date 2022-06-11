import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const RegisterPage = (): JSX.Element => {
  const navigate = useNavigate();

  const token: string | null = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      navigate("/list");
    }
  }, [navigate, token]);

  return (
    <>
      <Header pageName={"Register"} adminUser={false} />
      <RegisterForm />
    </>
  );
};

export default RegisterPage;
