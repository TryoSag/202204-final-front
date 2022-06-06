import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
interface ChildrenProps {
  children: JSX.Element;
}

const RouterRedirectList = ({ children }: ChildrenProps) => {
  const navigate = useNavigate();

  const token: string | null = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      navigate("/list");
    }
  }, [navigate, token]);

  if (token) {
    return children;
  }
  return null;
};

export default RouterRedirectList;
