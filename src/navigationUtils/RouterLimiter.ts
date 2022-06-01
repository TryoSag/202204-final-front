import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ChildrenProps {
  children: JSX.Element;
}

const RouterLimiter = ({ children }: ChildrenProps) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      navigate("/list");
    }
  }, [navigate, token]);
  return children;
};

export default RouterLimiter;
