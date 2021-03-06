import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ChildrenProps {
  children: JSX.Element;
}

const RouterRedirectLogin = ({ children }: ChildrenProps) => {
  const navigate = useNavigate();

  const token: string | null = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [navigate, token]);

  return children;
};

export default RouterRedirectLogin;
