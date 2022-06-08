import { Navigate, Route, Routes } from "react-router-dom";
import RouterRedirectList from "./components/RouterRedirectList/RouterRedirectList";
import RouterRedirectLogin from "./components/RouterRedirectLogin/RouterRedirectLogin";
import ListPage from "./pages/ListPage/ListPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

const App = () => (
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
    </Routes>
  </>
);

export default App;
