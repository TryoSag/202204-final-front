import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import RouterRedirectList from "./components/RouterRedirectList/RouterRedirectList";
import RouterRedirectLogin from "./components/RouterRedirectLogin/RouterRedirectLogin";
import CreatePage from "./pages/CreatePage/CreatePage";
import DetailPage from "./pages/DetailPage/DetailPage";
import EditPage from "./pages/EditPage/EditPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ListPage from "./pages/ListPage/ListPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { RootState } from "./redux/store/store";

const App = () => {
  const { adminUser } = useSelector((state: RootState) => state.user);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <RouterRedirectLogin>
              <Navigate to="/list" />
            </RouterRedirectLogin>
          }
        />
        <Route
          path="/list"
          element={
            <RouterRedirectLogin>
              <ListPage />
            </RouterRedirectLogin>
          }
        />
        {adminUser && (
          <Route
            path="/create"
            element={
              <RouterRedirectLogin>
                <CreatePage />
              </RouterRedirectLogin>
            }
          />
        )}
        {adminUser && (
          <Route
            path="/edit:id"
            element={
              <RouterRedirectLogin>
                <EditPage />
              </RouterRedirectLogin>
            }
          />
        )}
        <Route
          path="/detail:id"
          element={
            <RouterRedirectLogin>
              <DetailPage />
            </RouterRedirectLogin>
          }
        />
        <Route
          path="/login"
          element={
            <RouterRedirectList>
              <LoginPage />
            </RouterRedirectList>
          }
        />
        <Route
          path="/register"
          element={
            <RouterRedirectList>
              <RegisterPage />
            </RouterRedirectList>
          }
        />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
