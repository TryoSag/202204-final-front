import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store/store";

interface ChildrenProps {
  children: JSX.Element;
}

const RouterLimiter = ({ children }: ChildrenProps) => {
  const logged = useSelector((state: RootState) => state.user.logged);
  const navigate = useNavigate();

  useEffect(() => {
    if (logged) {
      navigate("/list");
    } else {
      navigate("/login");
    }
  }, [navigate, logged]);
  return children;
};

export default RouterLimiter;
